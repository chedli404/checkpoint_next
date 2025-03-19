import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>

      <div className={styles.contactInfo}>

        <div className={styles.title}>
          <h3>Contact Info</h3>
        </div>

        <div className={styles.address}>
          <p>Address :  </p>
          <p className={styles.s}>Rades Foret </p>
        </div>
        <div className={styles.phone}>
          <p>Phone : </p>
          <p className={styles.s}> + 216 24 119 607 </p>
        </div>
        <div className={styles.email}>
          <p>Email : </p>
          <p><a href="mailto:chedlifrini@gmail.com">chedlifrini@gmail.com</a></p>
        </div>

      </div>
      <div className={styles.copyRight}>
        <p>&copy; {new Date().getFullYear()} Chedli Frini. All rights reserved.</p>
      </div>

      <div className={styles.socialMedia}>
       
        <ul className={styles.socialLinks}> 
          <p>Social Media:</p>
          <li>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              <i className={`fab fa-github ${styles.icon}`}></i> GitHub
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
              <i className={`fab fa-linkedin ${styles.icon}`}></i> LinkedIn
            </a>
          </li>
          <li>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
              <i className={`fab fa-twitter ${styles.icon}`}></i> Twitter
            </a>
          </li>
        </ul>
      </div>

    </footer>
  );
};

export default Footer;
