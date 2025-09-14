import styles from '../style/Contact.module.scss';
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
        <ContactForm />
      </div >
    </motion.div>
  );
}
