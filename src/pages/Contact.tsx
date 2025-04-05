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
        <ContactForm />
        <p>If you have any questions or feedback, feel free to reach out!</p>
      </div >
    </motion.div>
  );
}
