import React from 'react';
import styles from './Page.module.css';

const About = () => {
  const skills = [
    { name: "React & React Native", color: "#61DAFB" },
    { name: "Node.js & Express", color: "#68A063" },
    { name: "JavaScript/TypeScript", color: "#F7DF1E" },
    { name: "Responsive Design", color: "#FF6B6B" },
    { name: "UI/UX Design", color: "#9C51B6" },
    { name: "GraphQL", color: "#E535AB" },
    { name: "AWS", color: "#FF9900" },
    { name: "Docker", color: "#2496ED" }
  ];

  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          <span className={styles.titleHighlight}>About</span> Me
        </h2>
        
        <div className={styles.content}>
          <div className={styles.bio}>
            <p className={styles.introText}>
              I'm a <span className={styles.highlight}>Full Stack Developer</span> passionate about creating 
              <span className={styles.wave}> delightful</span> digital experiences.
            </p>
            <p>
              With <span className={styles.counter}>5+</span> years in the industry, I've helped startups 
              and enterprises build web applications that users love.
            </p>
          </div>
          
          <div className={styles.skillsContainer}>
            <h3 className={styles.skillsTitle}>My Toolkit</h3>
            <div className={styles.skillsGrid}>
              {skills.map((skill, index) => (
                <div 
                  key={index}
                  className={styles.skillCard}
                  style={{ '--skill-color': skill.color }}
                >
                  {skill.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;