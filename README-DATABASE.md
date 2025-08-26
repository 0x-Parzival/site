# Neon Database Integration Guide

This project is now configured to work with Neon PostgreSQL database and deploy to Netlify.

## Setup Instructions

### 1. Create a Neon Database

1. Go to [Neon Console](https://console.neon.tech)
2. Create a new project
3. Copy your connection string from the dashboard

### 2. Environment Variables

Create a `.env` file in the root directory:

```bash
DATABASE_URL=postgresql://username:password@ep-example.us-east-2.aws.neon.tech/neondb?sslmode=require
```

### 3. Netlify Deployment

1. In your Netlify dashboard, go to Site Settings > Environment Variables
2. Add the `DATABASE_URL` environment variable with your Neon connection string
3. Deploy your site

## Database Schema

The application automatically creates these tables:

- **users**: id, email, name, created_at
- **posts**: id, title, content, author_id, created_at, updated_at

## Usage

The `DatabaseDemo` component provides a UI to:
- Create and view users
- Create and view posts
- Test database connectivity

## Files Added

- `src/lib/database.ts` - Database connection and operations
- `src/hooks/useDatabase.ts` - React hook for database operations
- `src/components/DatabaseDemo.tsx` - Demo component
- `.env.example` - Environment variable template

## Security Notes

- Never commit your `.env` file
- Use environment variables for sensitive data
- The Neon serverless driver handles connection pooling automatically
