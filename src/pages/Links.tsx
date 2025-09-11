import ButtonCards from "../components/ButtonCards";
import styles from '../style/Links.module.scss';
import { motion } from 'framer-motion';
import { links } from '../vars.ts';

export default function Links() {
  return (
    <>
      <motion.div
        layout
        style={{
          display: "flex",
          overflow: "hidden",
          height: "100%",
          alignItems: "flex-start",
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

          <ButtonCards cards={links} />
        </div>
      </motion.div>
    </>
  )
}
