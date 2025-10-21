import styles from '../style/Quote.module.scss';
import { motion } from 'framer-motion';
export default function Quote() {
  let currentMonth = 0;
  return (
    <motion.div
      layout
      style={{
        display: "none",
        flexDirection: "column",
        width: "100vw",
        height: "100%",
        justifyContent: "center",
        alignContent: "center",
      }}
      initial={{ opacity: 0, }}
      animate={{ opacity: 1, display: "flex", }}
      transition={{
        delay: currentMonth + 3,
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <motion.div
        layout
        style={{
          display: "none",
          width: "fit-content",
          height: "fit-content",
          justifyContent: "center",
          alignSelf: "center",
          alignContent: "center",
        }}
        initial={{ opacity: 0, }}
        animate={{ opacity: 1, display: "flex" }}
        transition={{
          delay: currentMonth + .5,
          duration: 0.5,
          ease: "easeInOut",
        }}
      >
        <div className={styles.quote}>
          <div className={styles.typewriter}>
            Time to get to work, <span className={styles.raven}>621.</span>
          </div>
          <span className={styles.blink}></span>
        </div>
      </motion.div>
      <motion.div
        layout
        style={{
          display: "flex",
          width: "fit-content",
          height: "fit-content",
          alignSelf: "center",
          justifyContent: "flex-end",
        }}
        initial={{
          opacity: 0,
          y: "15px",
        }}
        animate={{
          opacity: 1,
          transform: "translateY(0px)",
        }}
        transition={{
          delay: 5,
          duration: 1,
          ease: "easeInOut",
        }}
      >
        <span className={styles.peep}>— Handler Walter</span>
      </motion.div>
    </motion.div>
  );
}
