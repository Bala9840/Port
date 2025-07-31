import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './Sidebar.module.css';

const Sidebar = ({ activeSection }) => {
  return (
    <motion.div 
      className={styles.sidebar}
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.logo}>
        <h1>Selva</h1>
      </div>
      
      <nav className={styles.navigation}>
        <ul>
          <li>
            <NavLink 
              to="/" 
              className={activeSection === 'home' ? styles.active : ''}
            >
              <span className={styles.icon}>🏠</span> Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/about" 
              className={activeSection === 'about' ? styles.active : ''}
            >
              <span className={styles.icon}>👤</span> About
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/projects" 
              className={activeSection === 'projects' ? styles.active : ''}
            >
              <span className={styles.icon}>💼</span> Projects
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/certifications" 
              className={activeSection === 'certifications' ? styles.active : ''}
            >
              <span className={styles.icon}>🏆</span> Certifications
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/contact" 
              className={activeSection === 'contact' ? styles.active : ''}
            >
              <span className={styles.icon}>✉️</span> Contact
            </NavLink>
          </li>
        </ul>
      </nav>
      
      <div className={styles.intro}>
        <p>Innovative Full Stack Developer passionate about creating seamless solutions. Eager to leverage cutting-edge technologies to solve complex problems and contribute to innovative projects.</p>
      </div>
      
      <div className={styles.footer}>
        <p>© 2025 Zyzen. All rights reserved.</p>
      </div>
    </motion.div>
  );
};

export default Sidebar;
