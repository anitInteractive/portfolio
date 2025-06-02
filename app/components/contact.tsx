import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useForm } from "react-hook-form";
import styles from "../portfolio.module.scss";

const Contact = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: "onBlur" });

  const onSubmit = (data: any) => {
    console.log("Form submitted:", data);
    // Add your form submission logic here (e.g., API call)
    reset();
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
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
          <h2 className="sectionTitle">Get In Touch</h2>
          <p>
            Have a project in mind or want to discuss potential opportunities?
          </p>
          <div className={styles.contactDetails}>
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>📧</span>
              <span>anitdhadve@gmail.com</span>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>📱</span>
              <span>+91 9769007252</span>
            </div>
            <div className={styles.contactItem}>
              <img
                src="https://img.icons8.com/color/24/marker--v1.png"
                alt="Location"
              />
              <span>Mumbai, India</span>
            </div>
          </div>
          <div className={styles.socialLinks}>
            <a
              href="https://github.com/anit172737"
              className={styles.socialLink}
              target="_blank"
              // rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/feed/"
              className={styles.socialLink}
              target="_blank"
              // rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            {/* <a
              href="#"
              className={styles.socialLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a> */}
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.contactForm}>
          <div className={styles.contactForm_formField}>
            <input
              type="text"
              placeholder="Your Name"
              {...register("name", { required: "Name is required" })}
              className={errors.name ? styles.errorInput : ""}
            />
            {errors.name && (
              <span className={styles.errorMessage}>
                {errors.name.message as string}
              </span>
            )}
          </div>
          <div className={styles.contactForm_formField}>
            <input
              type="email"
              placeholder="Your Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              className={errors.email ? styles.errorInput : ""}
            />
            {errors.email && (
              <span className={styles.errorMessage}>
                {errors.email.message as string}
              </span>
            )}
          </div>
          <div className={styles.contactForm_formField}>
            <input type="text" placeholder="Subject" {...register("subject")} />
          </div>
          <div className={styles.contactForm_formField}>
            <textarea
              placeholder="Your Message"
              rows={5}
              {...register("message", { required: "Message is required" })}
              className={errors.message ? styles.errorInput : ""}
            />
            {errors.message && (
              <span className={styles.errorMessage}>
                {errors.message.message as string}
              </span>
            )}
          </div>
          <motion.button
            type="submit"
            className={styles.submitButton}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
