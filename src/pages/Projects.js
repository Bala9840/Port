import React, { useState } from 'react';
import styles from './Page.module.css';
import Project1img from '../assets/Project1.jpg';
import Project2img from '../assets/Project2.jpg';

const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'Full-featured online store with payment integration',
    detailedDescription: 'A complete e-commerce solution with product catalog, cart functionality, user authentication, and Stripe payment integration. Built with modern web technologies for optimal performance.',
    technologies: ['React', 'Node.js', 'MongoDB'],
    image: Project1img,
    features: [
      'Product search and filtering',
      'User reviews and ratings',
      'Admin dashboard',
      'Order tracking'
    ],
    additionalImages: [Project1img, Project2img]
  },
  {
    id: 2,
    title: 'Portfolio Website',
    description: 'Responsive portfolio for creative professionals',
    detailedDescription: 'A sleek, responsive portfolio website designed to showcase creative work with smooth animations and clean typography. Perfect for designers, photographers, and developers.',
    technologies: ['React', 'CSS Modules'],
    image: Project2img,
    features: [
      'Responsive grid layout',
      'Dark/light mode toggle',
      'Project filtering',
      'Contact form'
    ],
    additionalImages: [Project2img, Project1img]
  },
  {
    id: 3,
    title: 'Task Management App',
    description: 'Productivity app with real-time updates',
    detailedDescription: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features. Keeps everyone on the same page.',
    technologies: ['React', 'Firebase'],
    image: Project1img,
    features: [
      'Real-time synchronization',
      'Drag-and-drop interface',
      'Team assignments',
      'Progress tracking'
    ],
    additionalImages: [Project1img, Project2img]
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openProject = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const closeProject = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    setCurrentImageIndex(prev => 
      (prev + 1) % selectedProject.additionalImages.length
    );
  };

  const prevImage = () => {
    setCurrentImageIndex(prev => 
      (prev - 1 + selectedProject.additionalImages.length) % selectedProject.additionalImages.length
    );
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
              <img 
                src={selectedProject.additionalImages[currentImageIndex]} 
                alt={selectedProject.title} 
                className={styles.modalImage}
              />
              {selectedProject.additionalImages.length > 1 && (
                <>
                  <button className={styles.navButtonPrev} onClick={(e) => { e.stopPropagation(); prevImage(); }}>‹</button>
                  <button className={styles.navButtonNext} onClick={(e) => { e.stopPropagation(); nextImage(); }}>›</button>
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
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;