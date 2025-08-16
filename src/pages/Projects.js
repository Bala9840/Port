import React, { useState, useEffect } from 'react';
import styles from './Page.module.css';
import Project1aimg from '../assets/Project1a.jpg';
import Project1bimg from '../assets/Project1b.jpg';
import Project1cimg from '../assets/Project1c.jpg';
import Project1dimg from '../assets/Project1d.jpg';
import Project1eimg from '../assets/Project1e.jpg';
import Project1fimg from '../assets/Project1f.jpg';

import Project2aimg from '../assets/Project2a.jpg';
import Project2bimg from '../assets/Project2b.jpg';
import Project2cimg from '../assets/Project2c.jpg';
import Project2dimg from '../assets/Project2d.jpg';
import Project2eimg from '../assets/Project2e.jpg';

import Project3aimg from '../assets/Project3a.jpg';

const projects = [
  {
    id: 1,
    title: 'REST APP',
    description: 'Managing the Police Weekoff Request',
    detailedDescription: 'Developed a cross-platform Rest App to manage leave requests efficiently. The application allows users to submit requests, track statuses in real time, and manage approvals seamlessly. Built with React Native (mobile), React (web), Laravel (backend), and MySQL, it demonstrates full-stack development skills and delivers a user-friendly experience across platforms.',
    technologies: ['React', 'React Native', 'Laravel', 'PHP', 'MySQL', 'HTML', 'JavaScript', 'CSS'],
    image: Project1aimg,
    websiteUrl: '',
    features: [
      'User-friendly interface for submitting requests',
      'Real-time status updates',
      'Role-based access and approvals',
      'Dashboard for monitoring activities',
      'Cross-platform support (mobile and web)'
    ],
    additionalImages: [Project1aimg, Project1bimg, Project1cimg, Project1dimg, Project1eimg, Project1fimg]
  },

  {
    id: 2,
    title: 'Portfolio Website',
    description: 'Responsive portfolio for creative professionals',
    detailedDescription: 'A sleek, responsive portfolio website designed to showcase creative work with smooth animations and clean typography. Perfect for designers, photographers, and developers.',
    technologies: ['React', 'CSS Modules'],
    image: Project2aimg,
    websiteUrl: 'https://portbalaji.netlify.app/',
    features: [
      'Responsive grid layout',
      'Dark/light mode toggle',
      'Project filtering',
      'Contact form'
    ],
    additionalImages: [Project2aimg, Project2bimg, Project2cimg, Project2dimg, Project2eimg]
  },  

  {
    id: 3,
    title: 'Task Management App',
    description: 'Productivity app with real-time updates',
    detailedDescription: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features. Keeps everyone on the same page.',
    technologies: ['React', 'Firebase'],
    image: Project3aimg,
    websiteUrl: '',
    features: [
      'Real-time synchronization',
      'Drag-and-drop interface',
      'Team assignments',
      'Progress tracking'
    ],
    additionalImages: [Project3aimg]
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    let interval;
    if (selectedProject && isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentImageIndex(prev =>
          (prev + 1) % selectedProject.additionalImages.length
        );
      }, 5000); // Change image every 5 seconds
    }
    return () => clearInterval(interval);
  }, [selectedProject, currentImageIndex, isAutoPlaying]);

  const openProject = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    setIsAutoPlaying(true);
    document.body.style.overflow = 'hidden';
  };

  const closeProject = () => {
    setSelectedProject(null);
    setIsAutoPlaying(false);
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    setIsAutoPlaying(false);
    setCurrentImageIndex(prev =>
      (prev + 1) % selectedProject.additionalImages.length
    );
  };

  const prevImage = () => {
    setIsAutoPlaying(false);
    setCurrentImageIndex(prev =>
      (prev - 1 + selectedProject.additionalImages.length) % selectedProject.additionalImages.length
    );
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  return (
    <section id="projects" className="section">
      <div className={styles.content}>
        <h1 className="section-title">My Projects</h1>
        <div className={styles.projectsGrid}>
          {projects.map((project) => (
            <div
              key={project.id}
              className={styles.projectCard}
              onClick={() => openProject(project)}
            >
              <div className={styles.projectImageContainer}>
                <img
                  src={project.image}
                  alt={project.title}
                  className={styles.projectImage}
                />
              </div>
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

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className={styles.projectModalOverlay} onClick={closeProject}>
          <div className={styles.projectModalContent} onClick={e => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={closeProject}>×</button>

            <div className={styles.modalImageContainer}>
              <div className={styles.slideshowContainer}>
                {selectedProject.additionalImages.map((img, index) => (
                  <div
                    key={index}
                    className={`${styles.slide} ${index === currentImageIndex ? styles.active : ''}`}
                    style={{ backgroundImage: `url(${img})` }}
                  />
                ))}
              </div>

              {selectedProject.additionalImages.length > 1 && (
                <>
                  <button
                    className={styles.navButtonPrev}
                    onClick={(e) => { e.stopPropagation(); prevImage(); }}
                  >
                    ‹
                  </button>
                  <button
                    className={styles.navButtonNext}
                    onClick={(e) => { e.stopPropagation(); nextImage(); }}
                  >
                    ›
                  </button>
                  <button
                    className={styles.autoPlayButton}
                    onClick={(e) => { e.stopPropagation(); toggleAutoPlay(); }}
                  >
                    {isAutoPlaying ? '❚❚' : '▶'}
                  </button>
                </>
              )}
            </div>

            <div className={styles.modalTextContent}>
              <h2>{selectedProject.title}</h2>
              <p className={styles.modalDescription}>{selectedProject.detailedDescription}</p>

              <div className={styles.featuresSection}>
                <h4>Key Features:</h4>
                <ul>
                  {selectedProject.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className={styles.techList}>
                {selectedProject.technologies.map((tech, i) => (
                  <span key={i} className={styles.techPill}>{tech}</span>
                ))}
              </div>
              {selectedProject.websiteUrl && (
                <a
                  href={selectedProject.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.projectLinkBtn}
                  style={{
                    display: 'inline-block',
                    marginTop: '1rem',
                    padding: '0.5rem 1.2rem',
                    background: '#25eb3fff',
                    color: '#000000ff',
                    borderRadius: '6px',
                    textDecoration: 'none',
                    fontWeight: 500
                  }}
                >
                  Visit Website
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;