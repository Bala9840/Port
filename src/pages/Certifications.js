import React from 'react';
import styles from './Page.module.css';

const certifications = [
  'Full Stack Web Development Certification',
  'React Specialist Certification',
  'Advanced JavaScript Certification',
  'Responsive Web Design Certification',
  'Cloud Computing Fundamentals'
];

const Certifications = () => {
  return (
    <section id="certifications" className="section">
      <div className={styles.content}>
        <h1 className="section-title">Certifications</h1>
        <div className={styles.certificationsList}>
          {certifications.map((cert, index) => (
            <div key={index} className={styles.certificationItem}>
              <div className={styles.certIcon}>📜</div>
              <p>{cert}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
