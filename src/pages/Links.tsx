import { ButtonCards } from "../components/ButtonCards";
import styles from './Links.module.scss';
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
  ];
  return (
    <>
      <motion.div
        layout
        style={{
          display: "flex",
          overflow: "hidden",
          height: "100%",
          justifyContent: "center",
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
