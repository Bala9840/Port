import { useState } from 'react';
import styles from './Page.module.css';

// Import your certificate images
import java from '../assets/certificates/java.jpg';
import dbms from '../assets/certificates/dbms.jpg';
import os from '../assets/certificates/os.jpg';
import ibm from '../assets/certificates/ibm.jpg';
import linux from '../assets/certificates/linux.jpg';
import dme from '../assets/certificates/dme.jpg';
import intern from '../assets/certificates/intern.jpg';
import sp from '../assets/certificates/sp.jpg';



const certifications = [
      {
    name: 'PROJECT - REST App',
    image: sp,
    issuer: 'Dr. Stalin, IPS - Superintendent of Police, Kannyakumari District',
    date: 'App Launched - 11 Jul 2025',
    verifyUrl: ''
  },
    {
    name: 'INTERNSHIPS - Full Stack Developer',
    image: intern,
    issuer: 'Agile Tribers Tech Solutions',
    date: 'Jul 2025',
    verifyUrl: ''
  },
  {
    name: 'IBM - Generative AI for Developers',
    image: ibm,
    issuer: 'IBM Skills Network',
    date: 'Aug 2025',
    verifyUrl: 'https://www.credly.com/badges/f2e463cb-9f4b-4ca0-bda6-458e3ac91660'
  },
  {
    name: 'NPTEL - Programming in Java',
    image: java,
    issuer: 'Indian Institute of Technology Kharagpur',
    date: 'Oct 2023',
    verifyUrl: 'https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL24CS43S106280031330429728'
  },
  {
    name: 'NPTEL - Database Management Systems',
    image: dbms,
    issuer: 'Indian Institute of Technology Kharagpur',
    date: 'Sep 2024',
    verifyUrl: 'https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL24CS75S14230003202648294'
  },
  {
    name: 'NPTEL - Operating System Fundamentals',
    image: os,
    issuer: 'Indian Institute of Technology Kharagpur',
    date: 'Oct 2024',
    verifyUrl: 'https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL24CS108S55980013403957085'
  },
  {
    name: 'RedHat - Linux and Containers',
    image: linux,
    issuer: 'RedHat',
    date: 'Apr - Jun 2024',
    verifyUrl: ''
  },
   {
    name: 'Secured University 2nd Rank in DME',
    image: dme,
    issuer: 'Directorate of Technical Education, Chennai',
    date: 'Jun 2023',
    verifyUrl: ''
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
        <h1 className="section-title" >Certifications</h1>
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