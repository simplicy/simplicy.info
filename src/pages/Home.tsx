import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useContext } from '../components/page/Context';
import Cookies from "js-cookie";
import { useMeta } from '../common/hooks';
import Insta from "../common/assets/insta.svg";
import XLogo from "../common/assets/x.svg";
import LinkedIn from "../common/assets/linkedin.svg";
import Github from "../common/assets/github.svg";
import Homeview from '../components/Homeview';
import Intro from '../components/Intro';
export let items = [
  {
    icon: XLogo,
    openHotkey: 'Twitter',
    onClick: () => { window.open("https://x.com/simplicy_", "_blank") }
  },
  {
    icon: Github,
    openHotkey: 'GitHub',
    onClick: () => { window.open("https://github.com/simplicy", "_blank") }
  },
  {
    icon: Insta,
    openHotkey: 'Instagram',
    onClick: () => { window.open("https://instagram.com/simplicy_", "_blank") },
  },
  {
    icon: LinkedIn,
    openHotkey: 'LinkedIn',
    onClick: () => { window.open("https://linkedin.com/in/sean-p-hopkins", "_blank") },
  }
];

function Home() {
  const { delay } = useContext() as {
    delay: number,
  }
  let data = {
    something: "data"
  }

  const { refetch } = useMeta(data);
  //verify cookie expiry and format
  useEffect(() => {
    refetch();
  }, []);


  useEffect(() => {
    // On first load of the hour add cookie. If cookie exists, skip animation
    setTimeout(() => {
      if (!Cookies.get("intro")) {
        Cookies.set("intro", "true");
      }
    }, 1000 * delay);
  }, []);


  return (
    <motion.div
      layout
      style={{
        display: "flex",
        overflow: "hidden",
        height: "100%",
        alignItems: "center",
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
      <Intro />
      <Homeview />
    </motion.div>
  );
}

export default Home
