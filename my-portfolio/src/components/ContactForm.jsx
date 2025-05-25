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
    <form onSubmit={handleSubmit} className="w-full p-6 rounded-lg bg-[var(--knicks-black)]/80 border-2 border-[var(--knicks-blue)] shadow-lg">
      <div className="mb-4">
        <label htmlFor="name" className="block mb-2 font-medium text-[var(--knicks-orange)]">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded bg-[var(--knicks-black)] text-[var(--knicks-white)] border-2 focus:outline-none focus:ring-2 focus:ring-[var(--knicks-orange)] ${
            formErrors.name ? 'border-red-500' : 'border-[var(--knicks-blue)]'
          }`}
          placeholder="Your name"
        />
        {formErrors.name && (
          <p className="mt-1 text-sm text-red-500">{formErrors.name}</p>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block mb-2 font-medium text-[var(--knicks-orange)]">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded bg-[var(--knicks-black)] text-[var(--knicks-white)] border-2 focus:outline-none focus:ring-2 focus:ring-[var(--knicks-orange)] ${
            formErrors.email ? 'border-red-500' : 'border-[var(--knicks-blue)]'
          }`}
          placeholder="your.email@example.com"
        />
        {formErrors.email && (
          <p className="mt-1 text-sm text-red-500">{formErrors.email}</p>
        )}
      </div>

      <div className="mb-6">
        <label htmlFor="message" className="block mb-2 font-medium text-[var(--knicks-orange)]">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="5"
          className={`w-full px-4 py-3 rounded bg-[var(--knicks-black)] text-[var(--knicks-white)] border-2 focus:outline-none focus:ring-2 focus:ring-[var(--knicks-orange)] ${
            formErrors.message ? 'border-red-500' : 'border-[var(--knicks-blue)]'
          }`}
          placeholder="Your message here..."
        ></textarea>
        {formErrors.message && (
          <p className="mt-1 text-sm text-red-500">{formErrors.message}</p>
        )}
      </div>
      
      <Button type="submit" variant="primary" className="w-full sm:w-auto">
        Send Message
      </Button>    </form>
  );
};

export default ContactForm;