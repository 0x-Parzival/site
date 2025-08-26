// netlify/functions/submit-form.mjs
import { neon } from '@neondatabase/serverless';

export async function handler(event, context) {
  // Enable CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
  };

  // Handle preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: '',
    };
  }

  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    const sql = neon(process.env.DATABASE_URL);
    const body = JSON.parse(event.body);
    
    // Extract form data
    const {
      form_type,
      name,
      email,
      message,
      phone,
      subject,
      additional_data
    } = body;

    // Validate required fields
    if (!form_type) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Form type is required' }),
      };
    }

    // Insert form submission into database
    const result = await sql`
      INSERT INTO form_submissions (
        form_type,
        name,
        email,
        message,
        phone,
        subject,
        additional_data,
        submitted_at,
        ip_address,
        user_agent
      ) VALUES (
        ${form_type},
        ${name || null},
        ${email || null},
        ${message || null},
        ${phone || null},
        ${subject || null},
        ${additional_data ? JSON.stringify(additional_data) : null},
        NOW(),
        ${event.headers['x-forwarded-for'] || event.headers['x-real-ip'] || 'unknown'},
        ${event.headers['user-agent'] || 'unknown'}
      ) RETURNING id, submitted_at
    `;

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        message: 'Form submitted successfully',
        submission_id: result[0].id,
        submitted_at: result[0].submitted_at
      }),
    };

  } catch (error) {
    console.error('Form submission error:', error);
    
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        success: false,
        error: 'Failed to submit form',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      }),
    };
  }
}
