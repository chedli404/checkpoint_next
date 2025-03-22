"use client";
import React, { useEffect } from 'react';
import style from './about.module.css';


const About = () => {
  useEffect(() => {
    const cursor = document.querySelector(`.${style.cursor}`);
    const wavesContainer = document.querySelector(`.${style.waves}`);

    const handleMouseMove = (e) => {
      
      cursor.style.left = `${e.pageX}px`;
      cursor.style.top = `${e.pageY}px`;

      
      const wave = document.createElement('div');
      wave.classList.add(style.wave);
      wave.style.left = `${e.pageX}px`;
      wave.style.top = `${e.pageY}px`;

      
      const randomColor = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(
        Math.random() * 256
      )}, ${Math.floor(Math.random() * 256)}, 0.8)`;
      wave.style.borderColor = randomColor;

      wavesContainer.appendChild(wave);

      
      wave.addEventListener('animationend', () => {
        wave.remove();
      });
    };

    document.addEventListener('mousemove', handleMouseMove);

    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section id="about" className={style.about}>
    
      <div className={style.cursor}></div>

      
      <div className={style.waves}></div>

      <div className={style.container}>
        <h2 id="h2" className={style.h2}>Who am I?</h2>
        <p className={style.p}>
          Hi, I'm <strong className={style.strong}>Chedli Frini</strong>, a dedicated full stack web developer student at{' '}
          <strong className={style.strong}>[Go My Code Boumhal]</strong>. My journey into coding began{' '}
          <strong className={style.strong}>[5 months ago]</strong>, and since then, I've been captivated by the endless possibilities of building things for the web.
        </p>
        <p className={style.p}>
          I thrive on turning ideas into reality using tools like <strong className={style.strong}>React</strong>,{' '}
          <strong className={style.strong}>JavaScript</strong>, and <strong className={style.strong}>Next.js</strong>. Whether it's crafting dynamic user interfaces or optimizing website performance, I love the challenge of creating seamless digital experiences.
        </p>
        <p className={style.p}>
          My passion for web development stems from its unique blend of creativity and problem-solving. I enjoy experimenting with new frameworks and libraries, and I'm always eager to learn how to write cleaner, more efficient code.
        </p>
        <p className={style.p}>
          Beyond coding, I'm fascinated by the intersection of technology and design. I spend my free time exploring UI/UX trends, contributing to open-source projects, and occasionally diving into the world of{' '}
          <strong className={style.strong}>video games</strong> for inspiration.
        </p>
        <p className={style.p}>
          I'm always open to new opportunities and collaborations. If you're working on something exciting or just want to chat about tech, feel free to reach out—I'd love to connect!
        </p>
       
        <a href="/contact" className={style.buttonLink}>Contact Me</a>
      
      </div>
      
      
    </section>
  );
};

export default About;
