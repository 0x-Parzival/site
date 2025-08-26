// src/utils/formSubmission.js
// Utility functions for form submission to Netlify Functions

const submitForm = async (formData) => {
  try {
    const response = await fetch('/.netlify/functions/submit-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || 'Form submission failed');
    }

    return result;
  } catch (error) {
    console.error('Form submission error:', error);
    throw error;
  }
};

const getSubmissions = async (filters = {}) => {
  try {
    const queryParams = new URLSearchParams();
    
    Object.entries(filters).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== '') {
        queryParams.append(key, value);
      }
    });

    const response = await fetch(`/.netlify/functions/get-submissions?${queryParams}`);
    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || 'Failed to fetch submissions');
    }

    return result;
  } catch (error) {
    console.error('Get submissions error:', error);
    throw error;
  }
};

const getFormStats = async () => {
  try {
    const response = await fetch('/.netlify/functions/get-form-stats');
    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || 'Failed to fetch form statistics');
    }

    return result;
  } catch (error) {
    console.error('Get form stats error:', error);
    throw error;
  }
};

const deleteSubmission = async (id) => {
  try {
    const response = await fetch(`/.netlify/functions/delete-submission?id=${id}`, {
      method: 'DELETE',
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || 'Failed to delete submission');
    }

    return result;
  } catch (error) {
    console.error('Delete submission error:', error);
    throw error;
  }
};

// Form validation utilities
const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validatePhone = (phone) => {
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
  return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''));
};

const sanitizeFormData = (data) => {
  const sanitized = {};
  
  Object.entries(data).forEach(([key, value]) => {
    if (typeof value === 'string') {
      // Basic XSS prevention
      sanitized[key] = value
        .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
        .replace(/<[^>]*>/g, '')
        .trim();
    } else {
      sanitized[key] = value;
    }
  });
  
  return sanitized;
};

export {
  submitForm,
  getSubmissions,
  getFormStats,
  deleteSubmission,
  validateEmail,
  validatePhone,
  sanitizeFormData
};
