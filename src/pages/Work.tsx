import { motion } from "framer-motion";
import styles from "../common/style/Work.module.scss";
import Timeline from "../components/page/Timeline";
export default function Work() {
  let work = [
    {
      "companyname": "Map Communications",
      "title": "Software Developer",
      "start": "2023",
      "end": "Present",
    },
    {
      "companyname": "Corporate Message Services",
      "title": "IT Manager",
      "start": "2021",
      "end": "2023",
    },
    {
      "companyname": "MSC Cruises",
      "title": "IT Support Specialist",
      "start": "2015",
      "end": "2020",
    }
  ]
  return (
    <motion.div
      layout
      style={{
        display: "flex",
        overflow: "hidden",
        height: "100%",
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
        <Timeline list={work} />
      </div>
    </motion.div>
  );
}
