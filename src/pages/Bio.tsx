import Biography from "../components/Biography";
import { motion } from 'framer-motion';

export default function Bio() {
  return (
    <motion.div
      layout
      style={{
        display: "flex",
        justifyContent: "start",
        overflowY: "auto",
        height: "100%",
        width: "100%",
      }}
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <Biography />
    </motion.div>
  )
}
