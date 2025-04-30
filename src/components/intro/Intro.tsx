import { motion } from 'framer-motion';
import { useContext } from '../page/Context';
import Calendar from './Calendar';
import QShader from '../../common/qshader';
import test from '../../common/shaders/test.glsl?raw';
import { useEffect } from 'react';
export default function Intro() {
  const { delay } = useContext() as {
    delay: number,
  };
  useEffect(() => {
    QShader("#intro-canvas", test);
  }, []);

  // View
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
        <canvas id='intro-canvas' />
        <Calendar />
      </motion.div>
    </>
  );
}

