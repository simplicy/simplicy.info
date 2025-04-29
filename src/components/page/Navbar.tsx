import styles from '../style/Navbar.module.scss';
import Package from '../../../package.json';
import { motion } from 'framer-motion';
import { useContext } from './Context';
import ToggleTheme from './ToggleTheme';
import { useNavigate } from 'react-router-dom';
export default function Navbar() {
  const navigate = useNavigate();
  const { delay } = useContext() as {
    delay: number,
  }

  let logo = () => {
    return (
      <div className={styles.root}>
        <div className={styles.title}
          onClick={() => { navigate("/") }}>
          <h1>
            {Package.name.toUpperCase()}
          </h1>
          <span className={styles.blink}></span>
        </div>
        <ToggleTheme />
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
        {logo()}
      </motion.div>
    );
  }
  else {
    return (
      <>
        {logo()}
      </>
    );
  }
}
