// netlify/functions/get-form-stats.mjs
import { neon } from '@neondatabase/serverless';

export async function handler(event, context) {
  // Enable CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
  };

  // Handle preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: '',
    };
  }

  // Only allow GET requests
  if (event.httpMethod !== 'GET') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    const sql = neon(process.env.DATABASE_URL);
    
    // Get form submission statistics
    const [
      totalSubmissions,
      submissionsByType,
      recentSubmissions,
      submissionsByDate
    ] = await Promise.all([
      // Total submissions
      sql`SELECT COUNT(*) as total FROM form_submissions`,
      
      // Submissions by form type
      sql`
        SELECT form_type, COUNT(*) as count 
        FROM form_submissions 
        GROUP BY form_type 
        ORDER BY count DESC
      `,
      
      // Recent submissions (last 7 days)
      sql`
        SELECT COUNT(*) as recent_count 
        FROM form_submissions 
        WHERE submitted_at >= NOW() - INTERVAL '7 days'
      `,
      
      // Submissions by date (last 30 days)
      sql`
        SELECT 
          DATE(submitted_at) as date,
          COUNT(*) as count
        FROM form_submissions 
        WHERE submitted_at >= NOW() - INTERVAL '30 days'
        GROUP BY DATE(submitted_at)
        ORDER BY date DESC
      `
    ]);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        stats: {
          total_submissions: parseInt(totalSubmissions[0].total),
          recent_submissions: parseInt(recentSubmissions[0].recent_count),
          submissions_by_type: submissionsByType,
          submissions_by_date: submissionsByDate
        }
      }),
    };

  } catch (error) {
    console.error('Get form stats error:', error);
    
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        success: false,
        error: 'Failed to retrieve form statistics',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      }),
    };
  }
}
