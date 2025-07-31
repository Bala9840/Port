import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };
  
  const validate = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    return newErrors;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <motion.div 
      className={styles.contactContainer}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.header}>
        <h2>Instagram</h2>
        <p>@barathbalag.netlify.app</p>
      </div>
      
      <div className={styles.tagline}>
        <p>I'm always interested in hearing about new opportunities and exciting projects.</p>
      </div>
      
      <div className={styles.follow}>
        <p>Follow Me Below</p>
      </div>
      
      <form onSubmit={handleSubmit} className={styles.contactForm}>
        <div className={styles.formGroup}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? styles.error : ''}
          />
          {errors.name && <span className={styles.errorText}>{errors.name}</span>}
        </div>
        
        <div className={styles.formGroup}>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? styles.error : ''}
          />
          {errors.email && <span className={styles.errorText}>{errors.email}</span>}
        </div>
        
        <div className={styles.formGroup}>
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className={errors.message ? styles.error : ''}
          />
          {errors.message && <span className={styles.errorText}>{errors.message}</span>}
        </div>
        
        <motion.button
          type="submit"
          className={styles.submitButton}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Send Message
        </motion.button>
        
        {isSubmitted && (
          <div className={styles.successMessage}>
            Message sent successfully! I'll get back to you soon.
          </div>
        )}
      </form>
      
      <div className={styles.footer}>
        <p>Designed & Built by Balaji © 2025 Zyzen. All rights reserved.</p>
      </div>
    </motion.div>
  );
};

export default ContactForm;
