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
            <h3>Associate Software Engineer</h3>
            <span className={styles.company}>Interactive Avenues(IPG)</span>
            <span className={styles.date}>2025 - Present</span>
            <ul>
              <li>
                Worked on multiple enterprise-level projects, including Royal
                Enfield, BOB Card, and Philips.
              </li>
              <li>
                Developed high-performance, SEO-friendly web applications using
                Next.js with server-side rendering (SSR).{" "}
              </li>
              <li>
                Actively participated in agile sprints, code reviews, and
                delivered features on schedule.
              </li>
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
            <h3>Associate Software Engineer</h3>
            <span className={styles.company}>Choice Techlab(Choice India)</span>
            <span className={styles.date}>2023 - 2024</span>
            <ul>
              <li>
                Worked on the development of a Choice Connect application using
                ReactJs/NextJs and TypeScript.
              </li>
              <li>
                Improved application performance by optimizing REST API calls
                and reducing load times in page speed.{" "}
              </li>
              <li>
                Collaborated with cross-functional teams to ensure timely
                delivery of project milestones.
              </li>
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
            <h3>Associate Software Engineer</h3>
            <span className={styles.company}>Nimap Infotech</span>
            <span className={styles.date}>2021 - 2023</span>
            <ul>
              <li>
                I contributed to multiple high-impact projects including Godrej
                GPL Alchemy, IIFL Wealth, and C2Hire.
              </li>
              <li>
                I led the development of the Godrej GPL Alchemy platform from
                scratch using React.js, Redux, react-hook-form, and Axios,
                focusing on building scalable and maintainable architecture.
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
