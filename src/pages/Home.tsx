import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import styles from './Home.module.scss';
import { motion } from 'framer-motion';
import Bio from '../components/Bio';
import { Card } from '../common/types';
import { useContext } from '../components/page/Context';
import Links from '../components/Links';
import Cards from '../components/Cards';
import Resume from '../components/Resume';

function Home() {
  const navigate = useNavigate();
  const {
    view,
    setView,
    mobile,
  } = useContext() as {
    view: string;
    setView: (view: string) => void;
    mobile: boolean;
  }

  //verify cookie expiry and format
  useEffect(() => {
  }, [navigate]);



  let cards: Card[] = [
    {
      name: "Bio",
      onClick: () => { setView("bio") },
      styles: styles.mobile,
      enabled: true,
    },
    {
      name: "My Links",
      onClick: () => { setView("links") },
      styles: null,
      enabled: true,
    },
    {
      name: "Portfolio",
      onClick: () => { console.log("Card 3 clicked"); },
      styles: null,
      enabled: true,
    },
    {
      name: "Resume",
      onClick: () => { setView("resume"); },
      styles: null,
      enabled: true,
    }
  ];

  let links = [
    {
      name: "GitHub",
      onClick: () => {
        window.open("https://GitHub.com/simplicy", "_blank");
      },
      enabled: true
    }
  ];

  useEffect(() => {
  }, [mobile]);

  const Switcher = () => {
    switch (view) {
      case "bio":
        return (
          <Bio />
        );
      case "links":
        return (
          <Links links={links} />
        );
      case "resume":
        return (
          <Resume />
        );
      default:
        return (
          <Cards cards={cards} />
        );
    }
  }

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
          <Bio />
        </div>
        <Switcher />
      </div>
    </motion.div>
  );
}

export default Home
