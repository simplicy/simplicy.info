import ButtonCards from "../components/ButtonCards";
import styles from '../style/Links.module.scss';
import { motion } from 'framer-motion';

export default function Links() {
  let links = [
    {
      name: "Closyt.com",
      onClick: () => {
        window.open("https://closyt.com", "_blank");
      },
      description: "Digital Outfit Planner",
      enabled: true
    },
    {
      name: "Sympil.com",
      onClick: () => {
        window.open("https://sympil.com", "_blank");
      },
      description: "Personal Blog",
      enabled: true
    },
    {
      name: "blog.simplicy.info",
      onClick: () => {
        window.open("https://blog.simplicy.info", "_blank");
      },
      description: "Tech Blog",
      enabled: true
    },
    {
      name: "Ebay Shop",
      onClick: () => {
        window.open("https://ebay.com/usr/simplicy_0", "_blank");
      },
      description: "Shop",
      enabled: true
    },
    {
      name: "Ko-Fi",
      onClick: () => {
        window.open("https://ko-fi.com/simplicy", "_blank");
      },
      description: "Donate",
      enabled: true
    },

  ];
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
