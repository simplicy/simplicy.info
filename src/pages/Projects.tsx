import { motion } from "framer-motion";
import styles from "./style/Projects.module.scss";
import { apps } from "../common/vars";
import ButtonCards from "../components/ButtonCards";
import { useNavigate } from "react-router-dom";
import ProjectCards from "../components/ProjectCards";
export default function Projects() {
  const navigate = useNavigate();

  return (
    <motion.div
      style={{
        display: "flex",
        padding: "2ch",
        outline: "none",
        overflowY: "auto",
        flexGrow: 1,
        flexDirection: "column",
        width: "100%",
      }}
      initial={{
        opacity: 0,
        overflowY: "hidden",
        y: "var(--fade-distance)",
      }}
      animate={{
        opacity: 1,
        overflowY: "auto",
        transform: "translateY(0px)",
      }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <div className={styles.root}>
        <ProjectCards cards={apps} />
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
            delay: (apps.length * 0.2) + .1,
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
