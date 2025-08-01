import React, { useState } from 'react';
import styles from './Page.module.css';

// Import your certificate images
import java from '../assets/certificates/java.jpg';


const certifications = [
  {
    name: 'Full Stack Web Development Certification',
    image: java,
    issuer: 'ABC Certification Authority',
    date: 'June 2023',
    verifyUrl: 'https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL24CS43S106280031330429728'
  },
  {
    name: 'React Specialist Certification',
    image: java,
    issuer: 'React Education Board',
    date: 'March 2023',
    verifyUrl: 'https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL24CS43S106280031330429728'
  },
  {
    name: 'Advanced JavaScript Certification',
    image: java,
    issuer: 'JavaScript Institute',
    date: 'January 2023',
    verifyUrl: 'https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL24CS43S106280031330429728'
  },
  {
    name: 'Responsive Web Design Certification',
    image: java,
    issuer: 'Web Design Academy',
    date: 'November 2022',
    verifyUrl: 'https://example.com/verify/webdesign'
  },
  {
    name: 'Cloud Computing Fundamentals',
    image: java,
    issuer: 'Cloud Professionals Association',
    date: 'September 2022',
    verifyUrl: 'https://example.com/verify/cloud'
  }
];

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const openCert = (cert) => {
    setSelectedCert(cert);
    document.body.style.overflow = 'hidden';
  };

  const closeCert = () => {
    setSelectedCert(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="certifications" className="section">
      <div className={styles.content}>
        <h1 className="section-title">Certifications</h1>
        <div className={styles.certificationsList}>
          {certifications.map((cert, index) => (
            <div 
              key={index} 
              className={styles.certificationItem}
              onClick={() => openCert(cert)}
            >
              <div className={styles.certIcon}>📜</div>
              <p>{cert.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Certificate Modal */}
      {selectedCert && (
        <div className={styles.certModalOverlay} onClick={closeCert}>
          <div className={styles.certModalContent} onClick={e => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={closeCert}>×</button>
            
            <div className={styles.certImageContainer}>
              <img 
                src={selectedCert.image} 
                alt={selectedCert.name} 
                className={styles.certImage}
              />
            </div>
            
            <div className={styles.certDetails}>
              <h2>{selectedCert.name}</h2>
              <div className={styles.certMeta}>
                <p><strong>Issued by:</strong> {selectedCert.issuer}</p>
                <p><strong>Date:</strong> {selectedCert.date}</p>
              </div>
              
              <a 
                href={selectedCert.verifyUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.verifyButton}
              >
                Verify Certificate
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certifications;