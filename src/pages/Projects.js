import React from 'react';
import styles from './Page.module.css';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'Full-featured online store with payment integration',
    technologies: ['React', 'Node.js', 'MongoDB']
  },
  {
    title: 'Portfolio Website',
    description: 'Responsive portfolio for creative professionals',
    technologies: ['React', 'CSS Modules']
  },
  {
    title: 'Task Management App',
    description: 'Productivity app with real-time updates',
    technologies: ['React', 'Firebase']
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className={styles.content}>
        <h1 className="section-title">My Projects</h1>
        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <div key={index} className={styles.projectCard}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className={styles.techList}>
                {project.technologies.map((tech, i) => (
                  <span key={i} className={styles.techPill}>{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
