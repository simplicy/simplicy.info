import { motion } from 'framer-motion';
import ButtonCards from '../components/ButtonCards.tsx';
import { donate_links } from '../vars.ts';

export default function Support() {
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
      <ButtonCards cards={donate_links} />
    </motion.div>
  )
}
