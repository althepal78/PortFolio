import { useState } from 'react';
import Button from './Button';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [formErrors, setFormErrors] = useState({});
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };
  
  const validate = () => {
    const errors = {};
    
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    }
    
    return errors;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const errors = validate();
    
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    
    // Form is valid, proceed with submission
    console.log('Form submitted:', formData);
    
    // In a real app, you would send the data to your backend here
    alert('Thanks for your message! I\'ll get back to you soon.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
      <div className="mb-4">
        <label htmlFor="name" className="block mb-2 font-medium">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[var(--knicks-blue)] ${
            formErrors.name ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {formErrors.name && (
          <p className="mt-1 text-sm text-red-500">{formErrors.name}</p>
        )}
      </div>
      
      <div className="mb-4">
        <label htmlFor="email" className="block mb-2 font-medium">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[var(--knicks-blue)] ${
            formErrors.email ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {formErrors.email && (
          <p className="mt-1 text-sm text-red-500">{formErrors.email}</p>
        )}
      </div>
      
      <div className="mb-6">
        <label htmlFor="message" className="block mb-2 font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="5"
          className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[var(--knicks-blue)] ${
            formErrors.message ? 'border-red-500' : 'border-gray-300'
          }`}
        ></textarea>
        {formErrors.message && (
          <p className="mt-1 text-sm text-red-500">{formErrors.message}</p>
        )}
      </div>
      
      <Button type="submit" variant="primary">
        Send Message
      </Button>
    </form>
  );
};

export default ContactForm;