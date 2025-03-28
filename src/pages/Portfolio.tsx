import { motion } from "framer-motion";
import styles from "./Portfolio.module.scss";
import { ItemBoxes } from "../components/ItemBoxes";
import Bag from "../../public/bag.jpg";
import BagBack from "../../public/bag_back.jpg"; // Example image import, if needed
import Cane from "../../public/smart_cane.jpg";
export default function Portfolio() {
  let cards = [
    {
      name: "Denim Tote",
      onClick: () => {
        console.log("Denim Tote");
      },
      imgs: [Bag, BagBack],
      enabled: true
    },
    {
      name: "SAMD21G18 Smart Cane",
      onClick: () => {
        window.open("https://youtu.be/H2fUc8caLwc", "_blank");
      },
      imgs: [Cane],
      enabled: true
    },
    {
      name: "More comming soon...",
      onClick: () => {
      },
      imgs: [],
      enabled: true
    },
  ];
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
        <ItemBoxes cards={cards} />
      </div>
    </motion.div>
  );
}
