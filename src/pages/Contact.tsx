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
      initial={{ opacity: 0, }}
      animate={{ opacity: 1, }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <div className={styles.root}>
        <h1>Contact</h1>
        <ContactForm />

      </div >
    </motion.div>
  );
}
