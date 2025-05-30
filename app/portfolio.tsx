// portfolio.tsx
"use client";
import React, { useEffect } from "react";
import styles from "./Portfolio.module.scss";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { smoothScroll } from "./utils/utility";

const Portfolio: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <header className={styles.hero}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={styles.heroContent}
        >
          <h1>Anit Dhadve</h1>
          <p className={styles.tagline}>
            Frontend Developer | React & Next.js Specialist
          </p>
          <p className={styles.heroText}>
            Building beautiful, performant web experiences
          </p>
          <motion.div
            className={styles.ctaButtons}
            whileHover={{ scale: 1.05 }}
          >
            <a
              onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                e.preventDefault();
                smoothScroll("projects");
              }}
              className={styles.primaryButton}
            >
              View My Work
            </a>
            <a
              onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                e.preventDefault();
                smoothScroll("contact");
              }}
              className={styles.secondaryButton}
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>
        <div className={styles.scrollIndicator}>
          <span>Scroll Down</span>
          <div className={styles.arrow}></div>
        </div>
      </header>

      {/* Skills Section */}
      <section id="skills" className={styles.skillsSection}>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          My Skills
        </motion.h2>
        <div className={styles.skillsGrid}>
          {[
            {
              name: "React",
              icon: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/96/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png",
            },
            {
              name: "Next.js",
              icon: "https://img.icons8.com/fluency/96/nextjs.png",
            },
            {
              name: "TypeScript",
              icon: "https://img.icons8.com/fluency/96/typescript--v1.png",
            },
            {
              name: "JavaScript",
              icon: "https://img.icons8.com/color/96/javascript--v1.png",
            },
            {
              name: "Redux Toolkit",
              icon: "https://img.icons8.com/color/96/redux.png",
            },
            {
              name: "SCSS/CSS",
              icon: "https://img.icons8.com/color/96/sass.png",
            },
            { name: "Git", icon: "https://img.icons8.com/color/96/git.png" },
          ].map((skill, index) => (
            <motion.div
              key={skill.name}
              className={styles.skillCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <img className={styles.skillIcon} src={skill.icon} />
              <h3>{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={styles.projectsSection}>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>
        <div className={styles.projectsGrid}>
          <motion.div
            className={styles.projectCard}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
          >
            <div className={styles.projectImage}>
              <img src="/images/godrej.png" alt="Godrej GPL Alchemy" />
              <div className={styles.projectOverlay}>
                <a
                  href="https://gplalchemy-cr.nimapinfotech.com/login"
                  className={styles.projectLink}
                  target="blank"
                >
                  View Project
                </a>
              </div>
            </div>
            <div className={styles.projectInfo}>
              <h3>Godrej GPL Alchemy</h3>
              <p>
                Talent development program for employees of Godrej Properties.
              </p>
              <div className={styles.projectTech}>
                <span>React</span>
                <span>Redux toolkit</span>
                <span>SASS</span>
                <span>Axios</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className={styles.projectCard}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
          >
            <div className={styles.projectImage}>
              <img src="/images/iifl.png" alt="IIFL Wealth" />
              <div className={styles.projectOverlay}>
                <a
                  href="https://www.360.one/wealth/home"
                  className={styles.projectLink}
                  target="blank"
                >
                  View Project
                </a>
              </div>
            </div>
            <div className={styles.projectInfo}>
              <h3>IIFL Wealth</h3>
              <p>
                Wealth management platform that provides investment advisory
                services, asset management.
              </p>
              <div className={styles.projectTech}>
                <span>React</span>
                <span>Redux Toolkit</span>
                <span>Chart.js</span>
                <span>SASS</span>
                <span>Axios</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className={styles.experienceSection}>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Professional Experience
        </motion.h2>
        <div className={styles.timeline}>
          <motion.div
            className={styles.timelineItem}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className={styles.timelineContent}>
              <h3>Associate Software Developer</h3>
              <span className={styles.company}>Interactive Avenues(IPG).</span>
              <span className={styles.date}>2025 - Present</span>
              <ul>
                <li>Developed and maintained 10+ React applications</li>
                <li>Improved performance by 40% through code optimization</li>
                <li>Led UI/UX redesign for flagship product</li>
              </ul>
            </div>
          </motion.div>
          <motion.div
            className={styles.timelineItem}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className={styles.timelineContent}>
              <h3>Junior Web Developer</h3>
              <span className={styles.company}>Digital Creations</span>
              <span className={styles.date}>2019 - 2021</span>
              <ul>
                <li>Built responsive websites using modern CSS techniques</li>
                <li>Collaborated on React component library</li>
                <li>Implemented accessibility best practices</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={styles.aboutSection}>
        <div className={styles.aboutContainer}>
          <motion.div
            className={styles.aboutImage}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img src="/image.png" alt="Anit Dhadve" />
          </motion.div>
          <motion.div
            className={styles.aboutContent}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="sectionTitle ">About Me</h2>
            <p>
              I'm a passionate frontend developer with 3.10 years of experience
              creating exceptional digital experiences. My expertise lies in
              React, Next.js, and modern JavaScript frameworks.
            </p>
            <p>
              When I'm not coding, you can find me contributing to open-source
              projects, exploring new web technologies, or mentoring junior
              developers.
            </p>
            <div className={styles.aboutStats}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>10+</span>
                <span className={styles.statLabel}>Projects</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>3.10</span>
                <span className={styles.statLabel}>Years Experience</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>100%</span>
                <span className={styles.statLabel}>Passion</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={styles.testimonialsSection}>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          What People Say
        </motion.h2>
        <div className={styles.testimonialsContainer}>
          <motion.div
            className={styles.testimonialCard}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className={styles.testimonialContent}>
              "Anit's attention to detail and clean code practices made our
              project a success. His React expertise saved us countless hours of
              development."
            </div>
            <div className={styles.testimonialAuthor}>
              <img
                src={"https://img.icons8.com/fluency/96/person-male.png"}
                className={styles.authorImage}
              />
              <div>
                <h4>Shubham Birari</h4>
                <p>Senior Software Engineer, Hitachi Vantara.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={styles.contactSection}>
        <motion.div
          className={styles.contactContainer}
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 50 },
          }}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.contactInfo}>
            <h2 className="sectionTitle ">Get In Touch</h2>
            <p>
              Have a project in mind or want to discuss potential opportunities?
            </p>
            <div className={styles.contactDetails}>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>📧</span>
                <span>anit.dhadve@gmail.com</span>
                {/* <span>anit.dhadve17@gmail.com</span> */}
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>📱</span>
                <span>+91 9769007252</span>
              </div>
              <div className={styles.contactItem}>
                <img src="https://img.icons8.com/color/24/marker--v1.png" />
                <span>Mumbai, India</span>
              </div>
            </div>
            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialLink}>
                GitHub
              </a>
              <a href="#" className={styles.socialLink}>
                LinkedIn
              </a>
              <a href="#" className={styles.socialLink}>
                Twitter
              </a>
            </div>
          </div>
          <form className={styles.contactForm}>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Your Message" rows={5} required />
            <motion.button
              className={styles.submitButton}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </section>

      <footer className={styles.footer}>
        <p>
          &copy; {new Date().getFullYear()} Anit Dhadve. All rights reserved.
        </p>
        <div className={styles.footerLinks}>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
