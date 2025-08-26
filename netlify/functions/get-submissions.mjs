// netlify/functions/get-submissions.mjs
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
    
    // Parse query parameters
    const queryParams = event.queryStringParameters || {};
    const {
      form_type,
      limit = '50',
      offset = '0',
      start_date,
      end_date
    } = queryParams;

    // Build dynamic query
    let query = 'SELECT * FROM form_submissions WHERE 1=1';
    const params = [];
    let paramIndex = 1;

    if (form_type) {
      query += ` AND form_type = $${paramIndex}`;
      params.push(form_type);
      paramIndex++;
    }

    if (start_date) {
      query += ` AND submitted_at >= $${paramIndex}`;
      params.push(start_date);
      paramIndex++;
    }

    if (end_date) {
      query += ` AND submitted_at <= $${paramIndex}`;
      params.push(end_date);
      paramIndex++;
    }

    query += ` ORDER BY submitted_at DESC LIMIT $${paramIndex} OFFSET $${paramIndex + 1}`;
    params.push(parseInt(limit), parseInt(offset));

    // Execute query using template literal syntax for Neon
    const rows = await sql(query, params);

    // Get total count for pagination
    let countQuery = 'SELECT COUNT(*) as total FROM form_submissions WHERE 1=1';
    const countParams = [];
    let countParamIndex = 1;

    if (form_type) {
      countQuery += ` AND form_type = $${countParamIndex}`;
      countParams.push(form_type);
      countParamIndex++;
    }

    if (start_date) {
      countQuery += ` AND submitted_at >= $${countParamIndex}`;
      countParams.push(start_date);
      countParamIndex++;
    }

    if (end_date) {
      countQuery += ` AND submitted_at <= $${countParamIndex}`;
      countParams.push(end_date);
    }

    const countResult = await sql(countQuery, countParams);
    const total = parseInt(countResult[0].total);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        data: rows,
        pagination: {
          total,
          limit: parseInt(limit),
          offset: parseInt(offset),
          has_more: parseInt(offset) + parseInt(limit) < total
        }
      }),
    };

  } catch (error) {
    console.error('Get submissions error:', error);
    
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        success: false,
        error: 'Failed to retrieve submissions',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      }),
    };
  }
}
