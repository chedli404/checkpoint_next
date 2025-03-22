import styles from "./page.module.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

const videoBackground = {
  video: '/d.mp4', // Add your video to the `public` folder
};

export default function Home() {
  return (
    <div className={styles.homee}>

      <div className={styles.videoBackground}>
        <video autoPlay loop muted className={styles.video}>
          <source src={videoBackground.video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="home-container">
        <main className={styles.main}>

          <h1 className="home-title" style={{ animationDelay: '0s' }}  >Hi, I'm Chedli</h1>
          <div className="home-description-container">
          <p className="home-description" style={{ animationDelay: '3s' }}>
            A passionate web development student specializing in front-end and full-stack development.
          </p>
          <p className="home-description" style={{ animationDelay: '8s' }}>
            I love building clean, responsive, and user-friendly websites.
          </p>
          <p className="home-description" style={{ animationDelay: '12s' }}>
            Check out my projects below or{" "}
          </p>
          <p className="home-description" style={{ animationDelay: '16s' }}>
            <a href="/contact" className={styles.ctaLink}>let’s build something amazing together!</a>

          </p>
          <a href="/projects" className="home-button" style={{ animationDelay: '20s' }}>
            View My Projects
          </a>
          </div>
          
        </main>
      </div>
    </div>

  );
}
