import styles from './Error.module.scss';
import { motion } from 'framer-motion';
function Error() {
  return (
    <motion.div
      layout
      style={{ height: "100%", width: "100%" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className={styles.nothing}>
        <p className={styles.text}>
          404
        </p>
      </div>
    </motion.div>
  );
}

export default Error;
