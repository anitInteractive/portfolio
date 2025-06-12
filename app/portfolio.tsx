// portfolio.tsx
"use client";
import React, { useEffect, useState } from "react";
import styles from "./Portfolio.module.scss";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { projectArray, smoothScroll } from "./utils/utility";
import { ThreeDots } from "react-loader-spinner";
import { useRouter } from "next/navigation";
import Experience from "./components/experience";
import Contact from "./components/contact";
import { Toaster } from "react-hot-toast";

const Portfolio: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

  const handleClick = async () => {
    setLoading(true);
    try {
      await new Promise<void>((resolve) => {
        router.push("/projects");
        // Manually resolve after reasonable delay
        setTimeout(resolve, 1000); // Adjust timeout as needed
      });
    } finally {
      setLoading(false);
    }
  };

  const projectArrayCopy = projectArray.slice(0, 2);
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className={styles.container}>
      <Toaster
        position="top-right"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          className: "",
          duration: 5000,
          style: {
            background: "#363636",
            color: "#fff",
          },
        }}
      />
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
        <div className={styles.projectsHeader}>
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Featured Projects
          </motion.h2>
          {!isMobile && (
            <button
              className={styles.viewAllButton}
              onClick={handleClick}
              disabled={loading}
            >
              {loading ? (
                <div style={{ display: "grid", justifyItems: "center" }}>
                  <ThreeDots height={8} color="white" />
                </div>
              ) : (
                "View All Projects"
              )}
            </button>
          )}
        </div>

        <div className={styles.projectsGrid}>
          {projectArrayCopy.map((project) => {
            return (
              <motion.div
                className={styles.projectCard}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                key={project.projectName}
              >
                <div className={styles.projectImage}>
                  <img src={project.srcImg} alt={project.projectName} />
                  <div className={styles.projectOverlay}>
                    <a
                      href={project.redirectUrl}
                      className={styles.projectLink}
                      target="blank"
                    >
                      View Project
                    </a>
                  </div>
                </div>
                <div className={styles.projectInfo}>
                  <h3>{project.projectName}</h3>
                  <p>{project.description}</p>
                  <div className={styles.projectTech}>
                    {project.stacks.map((stack) => {
                      return <span key={stack}>{stack}</span>;
                    })}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
        {isMobile && <a className={styles.viewAllButton}>View All Projects</a>}
      </section>

      {/* Experience Section */}
      <Experience />

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
      <Contact />

      <footer className={styles.footer}>
        <p>
          &copy; {new Date().getFullYear()} Anit Dhadve. All rights reserved.
        </p>
        {/* <div className={styles.footerLinks}>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div> */}
      </footer>
    </div>
  );
};

export default Portfolio;
