import React from 'react';
import styles from '../styles/Internship.module.css';
import { FaCalendarAlt, FaMapMarkerAlt, FaLink, FaTasks, FaCertificate, FaEnvelope } from 'react-icons/fa';

// Import your internship certificate images
import linuxCert from '../assets/certificates/linux.jpg';
import agileTribersCert from '../assets/certificates/intern.jpg';

const Internship = () => {
  const internships = [
    {
      id: 1,
      company: 'Agile Tribers Tech Solutions',
      role: 'Full Stack Developer Intern',
      duration: 'June 27, 2025 - July 26, 2025',
      location: 'On Site',
      description: 'Worked as a Fullstack Developer Intern, gaining hands-on experience in modern web development technologies and contributing to real-world projects.',
      website: 'https://agiletribers.com',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'JavaScript', 'CSS', 'Laravel', 'PHP'],
      achievements: [
        'Developed responsive user interfaces with React',
        'Built RESTful APIs with Node.js and Express',
        'Implemented database schemas and queries with MongoDB',
        'Collaborated with team using Git version control',
        'Gained practical experience in full-stack development'
      ],
      certificate: agileTribersCert,
      certificateUrl: ''
    },
    {
      id: 2,
      company: 'CubenSquare (RedHat Advanced Business Partner)',
      role: 'Linux & Containers Trainee',
      duration: 'April 29, 2024 - June 7, 2024',
      location: 'Training Program',
      description: 'Completed comprehensive training in Linux and Containers, gaining expertise in system administration and container technologies.',
      website: '',
      technologies: ['Linux', 'Docker', 'Containerization', 'System Administration', 'Bash Scripting'],
      achievements: [
        'Mastered Linux system administration skills',
        'Learned containerization technologies including Docker',
        'Gained hands-on experience with Linux environments',
        'Completed RedHat affiliated training program',
        'Developed bash scripting skills for automation'
      ],
      certificate: linuxCert,
      certificateUrl: ''
    }
  ];

  const openCertificate = (certificateImage) => {
    // Open certificate in new tab or modal
    window.open(certificateImage, '_blank');
  };

  const handleEmailClick = () => {
    const email = 'barathbalaji9840@gmail.com';
    const subject = 'Internship Opportunity Inquiry';
    const body = 'Hello Balaji,\n\nI came across your portfolio and would like to discuss potential internship opportunities with you.\n\nBest regards,';
    
    // Open default email client
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="internship" className={styles.internshipSection}>
      <div className={styles.container}>
        <h1 className={styles.sectionTitle}>
          <span className={styles.titleHighlight}>Internship</span> Experience
        </h1>

        <div className={styles.internshipsContainer}>
          {internships.map((internship) => (
            <div key={internship.id} className={styles.internshipCard}>
              <div className={styles.cardHeader}>
                <h2 className={styles.companyName}>{internship.company}</h2>
                <span className={styles.roleBadge}>{internship.role}</span>
              </div>

              <div className={styles.details}>
                <div className={styles.detailItem}>
                  <FaCalendarAlt className={styles.detailIcon} />
                  <span>{internship.duration}</span>
                </div>
                <div className={styles.detailItem}>
                  <FaMapMarkerAlt className={styles.detailIcon} />
                  <span>{internship.location}</span>
                </div>
                {internship.website && (
                  <div className={styles.detailItem}>
                    <FaLink className={styles.detailIcon} />
                    <a 
                      href={internship.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={styles.websiteLink}
                    >
                      Visit Website
                    </a>
                  </div>
                )}
              </div>

              <p className={styles.description}>{internship.description}</p>

              <div className={styles.achievements}>
                <h4 className={styles.subtitle}>
                  <FaTasks className={styles.subtitleIcon} />
                  Key Achievements & Skills Gained
                </h4>
                <ul className={styles.achievementsList}>
                  {internship.achievements.map((achievement, index) => (
                    <li key={index} className={styles.achievementItem}>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.technologies}>
                <h4 className={styles.subtitle}>Technologies & Tools Used</h4>
                <div className={styles.techTags}>
                  {internship.technologies.map((tech, index) => (
                    <span key={index} className={styles.techTag}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className={styles.certificateSection}>
                <button 
                  className={styles.viewCertificateBtn}
                  onClick={() => openCertificate(internship.certificate)}
                >
                  <FaCertificate className={styles.certificateIcon} />
                  View Internship Certificate
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.ctaSection}>
          <h2>Looking for New Opportunities</h2>
          <p>I'm passionate about learning and growing as a developer. I'm always excited to take on new challenges and contribute to meaningful projects.</p>
          <button onClick={handleEmailClick} className={styles.ctaButton}>
            <FaEnvelope className={styles.emailIcon} />
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default Internship;