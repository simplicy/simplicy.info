import styles from '../style/Footer.module.scss';
import { motion } from 'framer-motion';
import { useContext } from './Context';
export default function Footer() {
  const { delay } = useContext() as {
    delay: number,
  }

  let foot = () => {
    return (
      <div className={styles.root}>
        <a href="https://sympil.com">
          ❤
        </a>
      </div >
    );
  }

  if (window.location.pathname === "/" && delay != 0) {
    return (
      <motion.div
        layout
        style={{
          width: "100%",
        }}
        initial={{ opacity: 0, display: "none" }}
        animate={{ opacity: 1, display: "flex" }}
        transition={{
          delay: delay,
          duration: 0.5,
          ease: "easeInOut",
        }}>
        {foot()}
      </motion.div>
    );
  }
  else {
    return (
      <>
        {foot()}
      </>
    );
  }
}
