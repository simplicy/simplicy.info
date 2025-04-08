import styles from './Contact.module.scss';
import ContactForm from "../components/ContactForm";
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <motion.div
      layout
      style={{
        display: "flex",
        overflow: "hidden",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
      }}
      initial={{
        opacity: 0,
        y: "var(--fade-distance)",
      }}
      animate={{
        opacity: 1,
        transform: "translateY(0px)",
      }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <div className={styles.root}>
        <motion.div
          style={{
            display: "flex",
            flexWrap: 'nowrap',
            flexDirection: 'column',
            overflow: "hidden",
            textWrap: 'wrap',
            textAlign: "center",
            translateX: "8ch",
            opacity: 0,
          }}
          animate={{
            translateX: "0px",
            opacity: 1,
          }}
          transition={{
            delay: 0.25,
            duration: .55,
            ease: "easeInOut",
          }}>

          <p>Contact me if you have a question or want to work together.</p>
        </motion.div>
        <motion.div
          style={{
            display: "flex",
            flexWrap: 'nowrap',
            flexDirection: 'column',
            overflow: "hidden",
            textWrap: 'wrap',
            textAlign: "center",
            translateX: "-8ch",
            opacity: 0,
          }}
          animate={{
            translateX: "0px",
            opacity: 1,
          }}
          transition={{
            delay: 0.25,
            duration: .55,
            ease: "easeInOut",
          }}>
          <p>I will get back to you as soon as I can.</p>
        </motion.div>
        <ContactForm />
      </div >
    </motion.div>
  );
}
