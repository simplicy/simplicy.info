import { Card } from "../common/types";
import { ButtonCards } from "./ButtonCards";
import styles from './Links.module.scss';
import { motion } from 'framer-motion';

export default function Links({ links }: { links: Card[] }) {
  return (
    <>
      <motion.div
        layout
        style={{
          overflow: "hidden",
          height: "100%",
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

          <ButtonCards cards={links} />
        </div>
      </motion.div>
    </>
  )
}
