// Input validation and sanitization utilities

/**
 * Sanitize HTML input to prevent XSS attacks
 * @param {string} input - Raw input string
 * @returns {string} - Sanitized string
 */
export const sanitizeInput = (input) => {
  if (!input || typeof input !== 'string') return '';
  
  return input
    .replace(/[<>]/g, '') // Remove angle brackets
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+=/gi, '') // Remove event handlers
    .trim();
};

/**
 * Validate Arabic text input
 * @param {string} text - Input text
 * @returns {boolean} - True if valid
 */
export const validateArabicText = (text) => {
  if (!text || typeof text !== 'string') return false;
  
  // Allow Arabic characters, numbers, spaces, and common punctuation
  const arabicRegex = /^[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF\s\d\-\/\(\)\.,]+$/;
  return arabicRegex.test(text.trim());
};

/**
 * Validate date format (YYYY-MM-DD)
 * @param {string} date - Date string
 * @returns {boolean} - True if valid
 */
export const validateDate = (date) => {
  if (!date) return false;
  
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  if (!dateRegex.test(date)) return false;
  
  const dateObj = new Date(date);
  return dateObj instanceof Date && !isNaN(dateObj);
};

/**
 * Validate number input
 * @param {string|number} num - Number input
 * @returns {boolean} - True if valid positive number
 */
export const validateNumber = (num) => {
  const parsed = parseInt(num);
  return !isNaN(parsed) && parsed > 0;
};

/**
 * Sanitize form data object
 * @param {Object} data - Form data object
 * @returns {Object} - Sanitized data object
 */
export const sanitizeFormData = (data) => {
  const sanitized = {};
  
  for (const [key, value] of Object.entries(data)) {
    if (typeof value === 'string') {
      sanitized[key] = sanitizeInput(value);
    } else {
      sanitized[key] = value;
    }
  }
  
  return sanitized;
};