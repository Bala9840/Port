import React from 'react';
import ContactForm from '../components/ContactForm';
import styles from './Page.module.css';

// Simple social icons using emoji (no external dependencies)
const SocialIcon = ({ emoji, label }) => (
  <span role="img" aria-label={label} className={styles.socialIcon}>
    {emoji}
  </span>
);

const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className={styles.content}>
        <ContactForm />
        <div className={styles.socialLinks}>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <SocialIcon emoji="🐙" label="GitHub" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <SocialIcon emoji="💼" label="LinkedIn" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <SocialIcon emoji="🐦" label="Twitter" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <SocialIcon emoji="📷" label="Instagram" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
