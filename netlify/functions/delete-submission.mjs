// netlify/functions/delete-submission.mjs
import { neon } from '@neondatabase/serverless';

export async function handler(event, context) {
  // Enable CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Allow-Methods': 'DELETE, OPTIONS',
  };

  // Handle preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: '',
    };
  }

  // Only allow DELETE requests
  if (event.httpMethod !== 'DELETE') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    const sql = neon(process.env.DATABASE_URL);
    const { id } = event.queryStringParameters || {};

    if (!id) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Submission ID is required' }),
      };
    }

    // Delete the submission
    const result = await sql`
      DELETE FROM form_submissions 
      WHERE id = ${parseInt(id)}
      RETURNING id
    `;

    if (result.length === 0) {
      return {
        statusCode: 404,
        headers,
        body: JSON.stringify({ error: 'Submission not found' }),
      };
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        message: 'Submission deleted successfully',
        deleted_id: result[0].id
      }),
    };

  } catch (error) {
    console.error('Delete submission error:', error);
    
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        success: false,
        error: 'Failed to delete submission',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      }),
    };
  }
}
