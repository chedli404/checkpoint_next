import React from 'react';
import style from './contact.module.css';
import Footer from "/components/Footer";


const videoBackground = {

  video: '/b.mp4', 
};

const Contact = () => {
  return (
    <section id="contact" className={style.contact}>
      <div className={style.videoBackground}>
        <video autoPlay loop muted className={style.video}>
          <source src={videoBackground.video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className={style.container}>
        <span className={style.span2} >Contact</span>
        <span className={style.span}>Me</span>
      </div>

      <form className={style.form} >
        <label>

          <input type="text" name="name" placeholder='name' required className={style.input} />
        </label>
        <label>

          <input type="email" name="email" placeholder='email' required className={style.input} />
        </label>
        <label>

          <input name="message" placeholder='message' required className={style.textarea}></input>
        </label>
        <button type="submit" className={style.btn}>Send</button>
      </form>
      <Footer  />
    </section>
  );
};

export default Contact;
