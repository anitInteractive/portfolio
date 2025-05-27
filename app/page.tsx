import React from "react";
import styles from "./Portfolio.module.scss";

const Portfolio: React.FC = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Anit Dhadve</h1>
        <p>Frontend Developer | React & Next.js</p>
        <nav>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="projects" className={styles.section}>
        <h2>Projects</h2>
        <div className={styles.projectsGrid}>
          <div className={styles.card}>
            <img src="/project1.png" alt="Project 1" />
            <h3>Reacto Inventory</h3>
            <p>Inventory management system with JWT-based SSO.</p>
          </div>
          <div className={styles.card}>
            <img src="/project2.png" alt="Project 2" />
            <h3>PavatiBook</h3>
            <p>Billing and expense tracker for dairy products.</p>
          </div>
        </div>
      </section>

      <section id="about" className={styles.section}>
        <h2>About Me</h2>
        <p>
          I’m a passionate frontend developer with 3 years of experience working
          with React, Next.js, TypeScript, and SCSS. I build scalable and
          user-friendly web apps.
        </p>
      </section>

      <section id="contact" className={styles.section}>
        <h2>Contact</h2>
        <form className={styles.form}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required />
          <button type="submit">Send</button>
        </form>
      </section>

      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Anit. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Portfolio;
