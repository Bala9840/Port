import React from 'react';
import styles from './Page.module.css';
import { FaWhatsapp, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const phoneNumber = '7695883050';
  const defaultMessage = 'Hello! I came across your portfolio...';

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;
    
    const whatsappMessage = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
    window.open(`https://wa.me/${phoneNumber}?text=${whatsappMessage}`, '_blank');
  };

  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactHeader}>
        <h1>Let's Connect</h1>
        <p>Send me a message directly via WhatsApp</p>
      </div>

      <form onSubmit={handleSubmit} className={styles.whatsappForm}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Your Name</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            placeholder="Enter your name" 
            required 
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">Your Email</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            placeholder="Enter your email" 
            required 
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="message">Your Message</label>
          <textarea 
            id="message" 
            name="message" 
            placeholder="Type your message here..." 
            rows="5" 
            required
          ></textarea>
        </div>

        <button type="submit" className={styles.submitButton}>
          <FaWhatsapp className={styles.whatsappIcon} />
          Send via WhatsApp
        </button>
      </form>

      <div className={styles.socialSection}>
        <p className={styles.connectText}>Or connect with me through</p>
        <div className={styles.socialIcons}>
          <a 
            href="https://instagram.com/recode._" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram className={styles.socialIcon} />
          </a>
          <a 
            href="https://linkedin.com/in/Balaji9840" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin className={styles.socialIcon} />
          </a>
          <a 
            href="mailto:barathbalaji9840@email.com" 
            aria-label="Email"
          >
            <FaEnvelope className={styles.socialIcon} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;