import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import styles from './Home.module.scss';
import { motion } from 'framer-motion';
import Biography from '../components/Biography';
import { Card } from '../common/types';
import Calendar from '../components/Calendar';
import { useContext } from '../components/page/Context';
import Cookies from "js-cookie";
import { ButtonCards } from '../components/ButtonCards';

function Home() {
  const { delay } = useContext() as {
    delay: number,
  }
  const navigate = useNavigate();
  //verify cookie expiry and format
  useEffect(() => {
  }, [navigate]);

  let cards: Card[] = [
    {
      name: "Bio",
      onClick: () => { navigate("bio"); },
      styles: styles.mobile,
      enabled: true,
    },
    {
      name: "Links",
      onClick: () => { navigate("links") },
      styles: null,
      enabled: true,
    },
    {
      name: "Portfolio",
      onClick: () => { navigate("portfolio"); },
      styles: null,
      enabled: true,
    },
    {
      name: "Work",
      onClick: () => { navigate("work"); },
      styles: null,
      enabled: true,
    },
    {
      name: "Contact",
      onClick: () => { navigate("contact-me"); },
      styles: null,
      enabled: true,
    }
  ];
  useEffect(() => {
    // On first load of the hour add cookie. If cookie exists, skip animation
    if (!Cookies.get("intro")) {
      Cookies.set("intro", "true", { expires: 1 / 48 });
    }
  }, []);


  return (
    <motion.div
      layout
      style={{
        height: "100%",
        width: "100%",
      }}
      initial={{ opacity: 0, }}
      animate={{ opacity: 1, }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
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
          delay: delay - 1,
          duration: 0.5,
          ease: "easeInOut",
        }}
      >
        <Calendar />
      </motion.div>

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
          delay: delay,
          duration: 0.5,
          ease: "easeInOut",
        }}
      >
        <div className={styles.root}>
          <div className={styles.desktop}>
            <Biography />
          </div>
          <div className={styles.switcher}>
            <motion.div
              layout
              style={{
                height: "100%",
                width: "100%",
              }}
              initial={{ opacity: 0, }}
              animate={{ opacity: 1, }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
            >
              <div className={styles.cards}>
                <ButtonCards cards={cards} />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Home
