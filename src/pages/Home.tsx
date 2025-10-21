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
        Cookies.set("intro", "true", { expires: 1 });//expires in 1 day
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
      }}
      animate={{
        opacity: 1,
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
