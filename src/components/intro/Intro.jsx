import { motion } from 'framer-motion';
import { useContext } from '../page/Context';
import Calendar from './Calendar';
import intro from '../../common/shaders/intro.glsl?raw';
import { useEffect } from 'react';
import GlslCanvas from 'glslCanvas';
import moon from '../../common/assets/moon.jpg';
import planet from '../../common/assets/pluto.jpg';
import Quote from './Quote';
import Cookies from 'js-cookie';

export default function Intro() {
  const { delay } = useContext();
  if (window.location.pathname !== "/") {
    Cookies.set("intro", "true", { expires: 1 });//expires in 1 day
    return null;
  }
  return (
    <>
      <motion.div
        layout
        style={{
          position: "absolute",
          height: "100vh",
          width: "100vw",
          top: 0,
          left: 0,
        }}
        initial={{ opacity: 1, }}
        animate={{ opacity: 0, display: "none" }}
        transition={{
          delay: delay - 1.05,
          duration: 0.5,
          ease: "easeInOut",
        }}>
        <canvas className='glslCanvas' data-fragment={intro} id="intro-canvas"
          width={window.innerWidth} height={window.innerHeight} data-textures={planet}
        />
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
          <Quote />
        </motion.div>
      </motion.div>
    </>
  );
}

