import styles from './Navbar.module.scss';
import Package from '../../../package.json';
import { motion } from 'framer-motion';
import { useContext } from './Context';
export default function Navbar() {
  const { delay } = useContext() as {
    delay: number,
  }
  let logo = () => {
    return (
      <div className={styles.root}>
        {/* Navbar content goes here */}

        <div className={styles.title}>
          <h1>
            {Package.name.toUpperCase()}
          </h1>

          <span className={styles.blink}></span>
        </div>
      </div>
    );
  }
  if (window.location.pathname === "/" && delay > 0) {
    return (
      <motion.div
        layout
        style={{
          width: "100%",
        }}
        initial={{ opacity: 0, }}
        animate={{ opacity: 1, }}
        transition={{
          delay: delay,
          duration: 0.5,
          ease: "easeInOut",
        }}>
        {logo()}
      </motion.div>
    );
  }
  return (
    <>
      {logo()}
    </>
  );
}
