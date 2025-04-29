import { motion } from 'framer-motion';
import { useContext } from '../page/Context';
import Calendar from './Calendar';
export default function Intro() {
  const { delay } = useContext() as {
    delay: number,
  };
  // View
  return (
    <>
      <motion.div
        layout
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          alignContent: "center",
        }}
        initial={{ opacity: 1, }}
        animate={{ opacity: 0, display: "none" }}
        transition={{
          delay: delay - 1.05,
          duration: 0.5,
          ease: "easeInOut",
        }}
      >
        <Calendar />
      </motion.div>
    </>
  );
}
