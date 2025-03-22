import React from 'react';
import styles from './project.module.css';

const projects = {
    beginner: [
        {
            title: 'Personal Website',
            description: 'This portfolio website built with Next.js and CSS.',
            link: '#',
            image: '/port.jpg', 
            tech: ['Next.js', 'CSS', 'React'],
        },
        {
            title: 'To-Do App',
            description: 'A simple app to add, delete, and mark tasks as complete.',
            link: '#',
            image: '/todo.jpg', 
            tech: ['React', 'Redux', 'CSS'],
        },
        {
            title: 'Weather App',
            description: 'Fetches and displays weather data using the OpenWeatherMap API.',
            link: '#',
            image: '/weather.jpg',
            tech: ['React', 'API', 'CSS'],
        },
    ],
    intermediate: [
        {
            title: 'Blog Website',
            description: 'A blog with CRUD functionality for adding, editing, and deleting posts.',
            link: '#',
            image: '/blog.jpg', 
            tech: ['React', 'TypeScript', 'Firebase'],
        },
        {
            title: 'E-Commerce Website',
            description: 'A mock e-commerce site with product listings and a shopping cart.',
            link: '#',
            image: '/ecom.jpg', 
            tech: ['React', 'Node.js', 'MongoDB'],
        },
    ],
    advanced: [
        {
            title: 'Full-Stack App',
            description: 'A full-stack project with React front-end and Node.js back-end.',
            link: '#',
            image: '/full stack.png', 
            tech: ['React', 'Node.js', 'Express', 'MongoDB'],
        },
        {
            title: 'Real-Time Chat App',
            description: 'A chat application using WebSockets for real-time communication.',
            link: '#',
            image: '/chat.jpg', 
            tech: ['React', 'WebSockets', 'Node.js'],
        },
    ],
};
const videoBackground = {
    video: '/f.mp4', 
};
const image = {
    imgg: 'cc.jpg',
}

const Projects = () => {
    return (
      <div className={styles.all}>
        <div className={styles.videoBackground}>
            <video autoPlay loop muted className={styles.video}>
                <source src={videoBackground.video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
        <section id="projects" className={styles.projectsSection}>
          <div className={styles.container}>
            <h2 className={styles.title}>My Projects</h2>
  
            <h3 className={styles.subtitle}>Beginner Projects</h3>
            <div className={`${styles.projectsGrid} ${styles.beginner}`}>
              {projects.beginner.map((project, index) => (
                <div key={index} className={styles.projectCard}>
                  <div className={styles.projectImageContainer}>
                    <div className={styles.overlay}>
                      <div className={styles.projectContent}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <div className={styles.techStack}>
                          {project.tech.map((tech, i) => (
                            <span key={i} className={styles.techTag}>
                              {tech}
                            </span>
                          ))}
                        </div>
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.projectLink}
                        >
                          View Project
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
  
            <h3 className={styles.subtitle}>Intermediate Projects</h3>
            <div className={`${styles.projectsGrid} ${styles.intermediate}`}>
              {projects.intermediate.map((project, index) => (
                <div key={index} className={styles.projectCard}>
                  <div className={styles.projectImageContainer}>
                    <img src={project.image} alt={project.title} className={styles.projectImage} />
                    <div className={styles.overlay}>
                      <div className={styles.projectContent}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <div className={styles.techStack}>
                          {project.tech.map((tech, i) => (
                            <span key={i} className={styles.techTag}>
                              {tech}
                            </span>
                          ))}
                        </div>
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.projectLink}
                        >
                          View Project
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
  
            <h3 className={styles.subtitle}>Advanced Projects</h3>
            <div className={`${styles.projectsGrid} ${styles.advanced}`}>
              {projects.advanced.map((project, index) => (
                <div key={index} className={styles.projectCard}>
                  <div className={styles.projectImageContainer}>
                    <img src={project.image} alt={project.title} className={styles.projectImage} />
                    <div className={styles.overlay}>
                      <div className={styles.projectContent}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <div className={styles.techStack}>
                          {project.tech.map((tech, i) => (
                            <span key={i} className={styles.techTag}>
                              {tech}
                            </span>
                          ))}
                        </div>
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.projectLink}
                        >
                          View Project
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
  
          <section id="skills" className={styles.skillsSection}>
            <div className={styles.container}>
              <h2>Skills</h2>
              <ul className={styles.skillsList}>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Git</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>MongoDB</li>
              </ul>
            </div>
          </section>
  
          <section id="tools" className={styles.toolsSection}>
            <div className={styles.container}>
              <h2>Tools</h2>
              <ul className={styles.toolsList}>
                <li>VS Code</li>
                <li>GitHub</li>
                <li>Postman</li>
                <li>Chrome DevTools</li>
                <li>Terminal</li>


              </ul>
            </div>
          </section>
  
          <section id="learning" className={styles.learningSection}>
            <div className={styles.container}>
              <h2>Currently Learning</h2>
              <p>Currently diving deeper into Next.js and TypeScript.</p>
            </div>
          </section>
        </section>
      </div>
    );
  };
  
  export default Projects;
