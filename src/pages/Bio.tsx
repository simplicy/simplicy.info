import Biography from "../components/Biography";
import { motion } from 'framer-motion';

export default function Bio() {
  return (
    <motion.div
      layout
      style={{
        display: "flex",
        justifyContent: "center",
        height: "100%",
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
      <Biography />
    </motion.div>
  )
}
