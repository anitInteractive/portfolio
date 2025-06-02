import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "../portfolio.module.scss";

const Experience = () => {
  return (
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
            <span className={styles.company}>Interactive Avenues(IPG)</span>
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
            <h3>Assosiate Software Developer</h3>
            <span className={styles.company}>Choice Techlab(Choice India)</span>
            <span className={styles.date}>2023 - 2024</span>
            <ul>
              <li>Built responsive websites using modern CSS techniques</li>
              <li>Collaborated on React component library</li>
              <li>Implemented accessibility best practices</li>
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
            <h3>Assosiate Software Developer</h3>
            <span className={styles.company}>Nimap Infotech</span>
            <span className={styles.date}>2021 - 2023</span>
            <ul>
              <li>Built responsive websites using modern CSS techniques</li>
              <li>Collaborated on React component library</li>
              <li>Implemented accessibility best practices</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
