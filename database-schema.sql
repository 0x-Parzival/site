-- Database schema for form submissions
-- Run this in your Neon SQL Editor to create the required table

CREATE TABLE IF NOT EXISTS form_submissions (
    id SERIAL PRIMARY KEY,
    form_type VARCHAR(100) NOT NULL,
    name VARCHAR(255),
    email VARCHAR(255),
    message TEXT,
    phone VARCHAR(50),
    subject VARCHAR(255),
    additional_data JSONB,
    submitted_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    ip_address VARCHAR(45),
    user_agent TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_form_submissions_type ON form_submissions(form_type);
CREATE INDEX IF NOT EXISTS idx_form_submissions_submitted_at ON form_submissions(submitted_at);
CREATE INDEX IF NOT EXISTS idx_form_submissions_email ON form_submissions(email);

-- Create a trigger to automatically update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_form_submissions_updated_at 
    BEFORE UPDATE ON form_submissions 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- Insert some sample data for testing
INSERT INTO form_submissions (form_type, name, email, message, subject) VALUES
('contact', 'John Doe', 'john@example.com', 'This is a test message', 'Test Subject'),
('newsletter', 'Jane Smith', 'jane@example.com', NULL, 'Newsletter Signup'),
('support', 'Bob Johnson', 'bob@example.com', 'I need help with my account', 'Account Help');
