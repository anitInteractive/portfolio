"use client";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "../portfolio.module.scss";
import { projectArray } from "../utils/utility";
import Link from "next/link";

const Projects = () => {
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
      <section id="projects" className={styles.projectsSectionPage}>
        <div className={styles.projectsHeader}>
          <div>
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              {/* Featured Projects */}
              Development Portfolio
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Detailed case studies of my professional projects and
              contributions.
            </motion.p>
          </div>
          <Link className={styles.viewAllButton} href="/">
            Back to Home
          </Link>
        </div>

        <div className={styles.projectsGrid}>
          {projectArray.map((project) => {
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
                      target="_blank"
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
      </section>
    </div>
  );
};

export default Projects;
