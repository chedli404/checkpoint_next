import React from 'react';


// Project data
const projects = {
  beginner: [
    {
      title: 'Personal Website',
      description: 'This portfolio website built with Next.js and CSS.',
      link: '#',
      image: '/personal-website.jpg', // Add your image to the `public` folder
    },
    {
      title: 'To-Do App',
      description: 'A simple app to add, delete, and mark tasks as complete.',
      link: 'https://github.com/Omar-coder-creator/checkpoint_redux',
      image: '/todo-app.jpg', // Add your image to the `public` folder
    },
    {
      title: 'Weather App',
      description: 'Fetches and displays weather data using the OpenWeatherMap API.',
      link: '#',
      image: '/weather-app.jpg', // Add your image to the `public` folder
    },
  ],
  intermediate: [
    {
      title: 'Blog Website',
      description: 'A blog with CRUD functionality for adding, editing, and deleting posts.',
      link: 'https://github.com/Omar-coder-creator/react_typescript_project',
      image: '/blog-app.jpg', // Add your image to the `public` folder
    },
    {
      title: 'E-Commerce Website',
      description: 'A mock e-commerce site with product listings and a shopping cart.',
      link: '#',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJLMBw7nYnX6cZ57Okws4BV6PxLXEffT5WgQ&s', // Add your image to the `public` folder
    },
  ],
  advanced: [
    {
      title: 'Full-Stack App',
      description: 'A full-stack project with React front-end and Node.js back-end.',
      link: '#',
      image: '/fullstack-app.jpg', // Add your image to the `public` folder
    },
    {
      title: 'Real-Time Chat App',
      description: 'A chat application using WebSockets for real-time communication.',
      link: '#',
      image: '/chat-app.jpg', // Add your image to the `public` folder
    },
  ],
};


const Projects = () => {
  return (
    <>
      <section id="projects" className="projects-section">
        <div className="container">
          <h2 className='title'>My Projects</h2>

          {/* Beginner Projects */}
          <h3>Beginner Projects</h3>
          <div className="projects-grid">
            {projects.beginner.map((project, index) => (
              <div key={index} className="project-card">
                <img src={project.image} alt={project.title} className="project-image" />
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                  View Project
                </a>
              </div>
            ))}
          </div>

          {/* Intermediate Projects */}
          <h3>Intermediate Projects</h3>
          <div className="projects-grid">
            {projects.intermediate.map((project, index) => (
              <div key={index} className="project-card">
                <img src={project.image} alt={project.title} className="project-image" />
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                  View Project
                </a>
              </div>
            ))}
          </div>

          {/* Advanced Projects */}
          <h3>Advanced Projects</h3>
          <div className="projects-grid">
            {projects.advanced.map((project, index) => (
              <div key={index} className="project-card">
                <img src={project.image} alt={project.title} className="project-image" />
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                  View Project
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section">
        <div className="container">
          <h2>Skills</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Git</li>
            {/* Add more skills as needed */}
          </ul>
        </div>
      </section>

      {/* Tools Section */}
      <section id="tools" className="tools-section">
        <div className="container">
          <h2>Tools</h2>
          <ul>
            <li>VS Code</li>
            <li>GitHub</li>
            <li>Postman</li>
            {/* Add more tools as needed */}
          </ul>
        </div>
      </section>

      {/* Learning Section */}
      <section id="learning" className="learning-section">
        <div className="container">
          <h2>Currently Learning</h2>
          <p>Currently diving deeper into Next.js and TypeScript.</p>
        </div>
      </section>
      
      
      
    </>
  );
};

export default Projects;