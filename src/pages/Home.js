import React from 'react';
import styles from './Page.module.css';
import { FaLinkedin, FaGithub, FaEnvelope, FaDownload } from 'react-icons/fa';
import profileImg from '../assets/balaji.jpg';
import resumePdf from '../assets/resume.pdf';


const Home = () => {
  return (
    <section id="home" className="section">
      <div className={styles.content}>
        <div className={styles.profileContainer}>

        </div>
        <h1 className="section-title">Welcome to My Portfolio</h1>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Hi, I'm Balaji</h3>
            <p>Full Stack Developer passionate about creating innovative solutions.</p>
          </div>
          <div className={styles.card}>
            <h3>My Expertise</h3>
            <p>React, Node.js, Modern Web Technologies</p>
          </div>
        </div>
      </div>

      <img
        src={profileImg}
        alt="Profile"
        className={styles.profileImg}
      />

<div className={styles.socialIcons}>
  {socialLinks.map(link =>
    link.label === 'Download Resume' ? (
      <a
        key={link.label}
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={link.label}
        className={styles.downloadBtn}
        download
      >
        <span className={styles.downloadIcon}>{link.icon}</span>
        <span className={styles.downloadText}>Download Resume</span>
      </a>
    ) : (
      <a
        key={link.label}
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={link.label}
        className={styles.iconLink}
      >
        {link.icon}
      </a>
    )
  )}
</div>
    </section>
  );
};

const socialLinks = [
  {
    icon: <FaLinkedin />,
    url: 'https://www.linkedin.com/in/balaji9840',
    label: 'LinkedIn'
  },
  {
    icon: <FaGithub />,
    url: 'https://github.com/bala9840',
    label: 'GitHub'
  },
  {
    icon: <FaEnvelope />,
    url: 'barathbalaji9840@email.com',
    label: 'Email'
  },
  {
    icon: <FaDownload />,
    url: '/resume.pdf', // Place your resume in public folder or adjust path
    label: 'Download Resume'
  }
];


export default Home;