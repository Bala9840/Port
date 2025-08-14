import React from 'react';
import styles from './Page.module.css';

const About = () => {
  const skills = [
    { name: "HTML / CSS", color: "#c3ae2bff" },
    { name: "MySQL", color: "#2496ED" },
    { name: "PHP", color: "#FF9900" },
    { name: "Laravel", color: "#E535AB" },
    { name: "JavaScript", color: "#F7DF1E" },
    { name: "Responsive Design", color: "#FF6B6B" },
    { name: "UI/UX Design", color: "#9C51B6" },
    { name: "React", color: "#61DAFB" }

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
              I’m a <span className={styles.highlight}>Full Stack Developer</span> passionate about building
              <span className={styles.wave}> powerful</span> software solutions that make a real impact.
            </p>

            <p>
              Helping clients bring their ideas to life with web applications users enjoy using every day.
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