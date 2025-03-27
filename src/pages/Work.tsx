import { motion } from "framer-motion";
import styles from "./Work.module.scss";
export default function Work() {
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
        Work

      </div>
    </motion.div>
  );
}
