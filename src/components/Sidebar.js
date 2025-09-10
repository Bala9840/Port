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
              to="/internship" 
              className={activeSection === 'internship' ? styles.active : ''}
            >
              <span className={styles.icon}>🛠️</span> Internship
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
        <p>Full Stack Developer fueled by innovation, crafting seamless solutions that blend design and functionality. Passionate about applying advanced technologies to turn complex problems into impactful results.</p>
      </div>
      
      <div className={styles.footer}>
        <p>© 2025 Balaji. All rights reserved.</p>
      </div>
    </motion.div>
  );
};

export default Sidebar;