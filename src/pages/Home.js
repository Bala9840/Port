import React from 'react';
import styles from './Page.module.css';
import { FaLinkedin, FaGithub, FaEnvelope, FaDownload, FaGraduationCap } from 'react-icons/fa';
import profileImg from '../assets/balaji.jpg';

const Home = () => {
  return (
    <section id="home" className={styles.section}>
      <div className={styles.content}>
        <div className={styles.profileContainer}></div>
        <h1 className={styles.sectionTitle}>Welcome to My Portfolio</h1>
        <div className={styles.grid}>
<div className={styles.card}>
  <h3>Hi, I'm Balaji</h3>
  <p>
    Full Stack Developer passionate about creating innovative solutions. 
    I specialize in blending design and functionality to craft software that solves real-world problems. 
    My goal is to turn complex ideas into seamless, user-friendly digital experiences.
  </p>
</div>

<div className={styles.card}>
  <h3>My Expertise</h3>
  <ul style={{marginLeft: '20px'}}>
    <li>HTML, CSS, PHP, MySQL, Laravel</li>
    <li>React & Modern Web Technologies</li>
    <li>UI/UX Design & Responsive Design</li>
    <li>Solving complex problems with clear, effective solutions</li>
    <li>Clean, maintainable, and scalable code</li>
    <li>Building new solutions or enhancing existing systems</li>
  </ul>
</div>



        </div>
      </div>

      <img src={profileImg} alt="Profile" className={styles.profileImg} />

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

      {/* Education Section */}
      <div className={styles.educationWrapper}>
        <div className={styles.educationContainer}>
          <h3 className={styles.educationTitle}>
            <FaGraduationCap className={styles.educationIcon} /> Education
          </h3>
          <div className={styles.educationDetails}>
            <div className={styles.educationItem}>
              <h4>B.Tech In Information Technology</h4>
              <p className={styles.institution}>University College Of Engineering Nagercoil</p>
              <p className={styles.duration}>2023 - 2026 | CGPA: 8.5</p>
            </div>
            <hr className={styles.ruler}></hr>
            <div className={styles.educationItem}>
              <h4>Diploma In Mechanical Engineering </h4>
              <p className={styles.institution}>Government Polytechnic College, Cheyyar</p>
              <p className={styles.duration}>2020 - 2023 | CGPA: 9.32</p>
            </div>
          </div>
        </div>
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
    url: 'https://mail.google.com/mail/?view=cm&fs=1&to=barathbalaji9840@email.com&su=Portfolio%20Inquiry&body=Hello%20Balaji,',
    label: 'Email'
  },
  {
    icon: <FaDownload />,
    url: './resume.pdf',
    label: 'Download Resume'
  }
];

export default Home;