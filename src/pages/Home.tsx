import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import styles from './Home.module.scss';
import { motion } from 'framer-motion';
import Bio from '../components/Bio';
import { Card } from '../common/types';
import { useContext } from '../components/page/Context';
import Links from '../components/Links';
import Cards from '../components/Cards';

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
      id: "1",
      name: "Bio",
      onClick: () => { setView("bio") },
      enabled: mobile,
    },
    {
      id: "2",
      name: "Links",
      onClick: () => { setView("links") },
      enabled: true
    },
    {
      id: "3",
      name: "Portfolio",
      onClick: () => { console.log("Card 3 clicked"); },
      enabled: true
    }
  ];

  let links = [
    {
      id: "1",
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
        {!mobile && view !== "bio" &&
          <Bio />
        }
        <Switcher />
      </div>
    </motion.div>
  );
}

export default Home
