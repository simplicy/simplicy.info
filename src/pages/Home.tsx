import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useContext } from '../components/page/Context';
import Cookies from "js-cookie";
import Homeview from '../components/Homeview';


function Home() {
  const { delay } = useContext() as {
    delay: number,
  }

  //verify cookie expiry and format
  useEffect(() => {
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
        height: "100%",
        padding: "2ch",
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
      <Homeview />
    </motion.div>
  );
}

export default Home
