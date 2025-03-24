import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import styles from './Home.module.scss';
import { motion } from 'framer-motion';
import Biography from '../components/Biography';
import { Card } from '../common/types';
import Cards from '../components/Cards';

function Home() {
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
      <div className={styles.root}>
        {/* Might change later */}
        <div className={styles.desktop}>
          <Biography />
        </div>
        <div className={styles.switcher}>
          <Cards cards={cards} />
        </div>
      </div>
    </motion.div>
  );
}

export default Home
