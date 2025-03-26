import styles from './Quote.module.scss';
import { motion } from 'framer-motion';
import { useContext } from './page/Context';
export default function Quote() {
  const { currentMonth } = useContext() as {
    currentMonth: number,
  }
  return (
    <motion.div
      layout
      style={{
        display: "none",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignContent: "center",
      }}
      initial={{ opacity: 0, }}
      animate={{ opacity: 1, display: "flex", }}
      transition={{
        delay: currentMonth + 2.5,
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
          delay: currentMonth + 2.5,
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
          alignContent: "flex-end",
        }}
        initial={{ opacity: 0, }}
        animate={{ opacity: 1, }}
        transition={{
          delay: currentMonth + 4.75,
          duration: 1,
          ease: "easeInOut",
        }}
      >
        <span className={styles.peep}>— Handler Walter</span>
      </motion.div>
    </motion.div>
  );
}
