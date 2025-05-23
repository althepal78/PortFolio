/**
 * Validates an email address
 * @param {string} email - Email address to validate
 * @returns {boolean} - Whether the email is valid
 */
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validates required fields
 * @param {string} value - Value to check
 * @returns {boolean} - Whether the value is non-empty
 */
export const isRequired = (value) => {
  return value && value.trim() !== '';
};

/**
 * Validates text length
 * @param {string} value - Value to check
 * @param {number} minLength - Minimum allowed length
 * @param {number} maxLength - Maximum allowed length
 * @returns {boolean} - Whether the value length is within range
 */
export const isValidLength = (value, minLength, maxLength) => {
  const length = value.trim().length;
  return length >= minLength && length <= maxLength;
};

/**
 * Validates a phone number
 * @param {string} phone - Phone number to validate
 * @returns {boolean} - Whether the phone number is valid
 */
export const isValidPhone = (phone) => {
  const phoneRegex = /^\+?[0-9]{10,15}$/;
  return phoneRegex.test(phone.replace(/[-\s()]/g, ''));
};

/**
 * Validates URL
 * @param {string} url - URL to validate
 * @returns {boolean} - Whether the URL is valid
 */
export const isValidUrl = (url) => {
  try {
    new URL(url);
    return true;
  } catch (error) {
    return false;
  }
};

/**
 * Validates a form object
 * @param {Object} formData - Form data to validate
 * @param {Object} rules - Validation rules for each field
 * @returns {Object} - Object containing errors for each invalid field
 */
export const validateForm = (formData, rules) => {
  const errors = {};

  Object.keys(rules).forEach(field => {
    const fieldRules = rules[field];
    const value = formData[field];

    // Required validation
    if (fieldRules.required && !isRequired(value)) {
      errors[field] = fieldRules.requiredMessage || 'This field is required';
      return;
    }

    // Skip other validations if field is empty and not required
    if (!value && !fieldRules.required) {
      return;
    }

    // Email validation
    if (fieldRules.email && !isValidEmail(value)) {
      errors[field] = fieldRules.emailMessage || 'Please enter a valid email address';
    }

    // Length validation
    if (fieldRules.minLength && fieldRules.maxLength) {
      if (!isValidLength(value, fieldRules.minLength, fieldRules.maxLength)) {
        errors[field] = fieldRules.lengthMessage || 
          `Must be between ${fieldRules.minLength} and ${fieldRules.maxLength} characters`;
      }
    }

    // Phone validation
    if (fieldRules.phone && !isValidPhone(value)) {
      errors[field] = fieldRules.phoneMessage || 'Please enter a valid phone number';
    }

    // URL validation
    if (fieldRules.url && !isValidUrl(value)) {
      errors[field] = fieldRules.urlMessage || 'Please enter a valid URL';
    }

    // Custom validation
    if (fieldRules.custom && typeof fieldRules.custom === 'function') {
      const customError = fieldRules.custom(value, formData);
      if (customError) {
        errors[field] = customError;
      }
    }
  });

  return errors;
};