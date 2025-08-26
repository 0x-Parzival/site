# Form Submission Server Setup

This project includes a complete form submission system using Neon Postgres database with Netlify Functions.

## Setup Instructions

### 1. Database Setup

1. **Create a Neon account** at [neon.tech](https://neon.tech)
2. **Create a new project** and database
3. **Run the database schema** from `database-schema.sql` in your Neon SQL Editor:
   ```sql
   -- This will create the form_submissions table with all necessary indexes
   ```

### 2. Environment Variables

1. **Copy the example environment file:**
   ```bash
   cp .env.example .env
   ```

2. **Update your `.env` file** with your actual Neon database connection string:
   ```
   DATABASE_URL=postgresql://username:password@ep-example-123456.us-east-2.aws.neon.tech/dbname?sslmode=require&channel_binding=require
   ```

3. **For Netlify deployment**, set the environment variable:
   ```bash
   netlify env:set DATABASE_URL "YOUR_NEON_CONNECTION_STRING"
   ```

### 3. Available Endpoints

#### Submit Form
- **URL:** `/.netlify/functions/submit-form`
- **Method:** POST
- **Body:**
  ```json
  {
    "form_type": "contact",
    "name": "John Doe",
    "email": "john@example.com",
    "subject": "Hello",
    "message": "This is a test message",
    "phone": "+1234567890",
    "additional_data": {}
  }
  ```

#### Get Submissions
- **URL:** `/.netlify/functions/get-submissions`
- **Method:** GET
- **Query Parameters:**
  - `form_type` - Filter by form type
  - `limit` - Number of results (default: 50)
  - `offset` - Pagination offset (default: 0)
  - `start_date` - Filter from date
  - `end_date` - Filter to date

#### Get Form Statistics
- **URL:** `/.netlify/functions/get-form-stats`
- **Method:** GET
- **Returns:** Total submissions, recent submissions, submissions by type, etc.

#### Delete Submission
- **URL:** `/.netlify/functions/delete-submission?id=123`
- **Method:** DELETE

### 4. Using the Components

#### Contact Form Component
```tsx
import ContactForm from './components/ContactForm';

<ContactForm 
  formType="contact"
  onSuccess={(result) => console.log('Form submitted:', result)}
  onError={(error) => console.error('Form error:', error)}
/>
```

#### Form Dashboard Component
```tsx
import FormDashboard from './components/FormDashboard';

<FormDashboard />
```

#### Utility Functions
```tsx
import { submitForm, getSubmissions, getFormStats } from './utils/formSubmission';

// Submit a form
const result = await submitForm({
  form_type: 'newsletter',
  email: 'user@example.com'
});

// Get submissions
const submissions = await getSubmissions({
  form_type: 'contact',
  limit: 20
});

// Get statistics
const stats = await getFormStats();
```

### 5. Database Schema

The `form_submissions` table includes:
- `id` - Primary key
- `form_type` - Type of form (contact, newsletter, etc.)
- `name` - User's name
- `email` - User's email
- `message` - Form message
- `phone` - Phone number (optional)
- `subject` - Subject line (optional)
- `additional_data` - JSON field for extra data
- `submitted_at` - Timestamp
- `ip_address` - User's IP address
- `user_agent` - User's browser info

### 6. Security Features

- **CORS enabled** for cross-origin requests
- **Input sanitization** to prevent XSS attacks
- **Email validation** on both client and server
- **Rate limiting** (configurable via environment variables)
- **SQL injection protection** using parameterized queries

### 7. Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start local development:**
   ```bash
   netlify dev
   ```

3. **Test the functions:**
   - Forms will be available at `http://localhost:8888/.netlify/functions/`

### 8. Deployment

1. **Deploy to Netlify:**
   ```bash
   netlify deploy --prod
   ```

2. **Set environment variables** in Netlify dashboard or CLI

### 9. Monitoring

- Check the Netlify Functions logs for any errors
- Monitor your Neon database usage
- Use the Form Dashboard component to view submissions

## Troubleshooting

- **Connection errors:** Verify your DATABASE_URL is correct
- **CORS issues:** Check the function headers configuration
- **Function timeouts:** Ensure your Neon database is accessible
- **Missing submissions:** Check the database table exists and has correct permissions
