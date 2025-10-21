import { motion } from "framer-motion";
import styles from "../style/Work.module.scss";
import Timeline from "../components/Timeline";
import { work } from "../common/vars";
import ButtonCards from "../components/ButtonCards";
import { useNavigate } from "react-router-dom";
export default function Work() {
  const navigate = useNavigate();
  return (
    <motion.div
      layout
      style={{
        display: "flex",
        padding: "2ch",
        flexDirection: "column",
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
        <Timeline list={work} />
        <motion.div
          layout
          style={{
            display: "flex",
            overflow: "hidden",
            justifyContent: "flex-end",
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
            delay: (work.length * 0.4) + .1,
            duration: 0.5,
            ease: "easeInOut",
          }}
        >
          <div className={styles.footer}>
            <ButtonCards cards={
              [{
                name: "← Back",
                onClick: () => { navigate(-1) },
                styles: null,
                enabled: true,
              }]
            } />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
