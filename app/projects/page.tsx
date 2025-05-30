"use client";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "../portfolio.module.scss";

const Projects = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <div className={styles.container}>
      <section id="projects" className={styles.projectsSectionPage}>
        <div className={styles.projectsHeader}>
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Featured Projects
          </motion.h2>
        </div>

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
    </div>
  );
};

export default Projects;
