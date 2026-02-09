import { motion } from "framer-motion";
import styles from "./style/Work.module.scss";
import { work } from "../common/vars";
import ButtonCards from "../components/ButtonCards";
import { useNavigate } from "react-router-dom";
import { useContext } from "../components/page/Context";
import { useEffect } from "react";
import Loader from "../components/page/Loader";
export default function Work() {
  const navigate = useNavigate();
  const { file, isFetchingFile, refetchFile } = useContext() as {
    file: string,
    refetchFile: () => void,
    isFetchingFile: boolean,
  }
  useEffect(() => {
    refetchFile();
  }, []);

  return (
    <motion.div
      layout
      style={{
        display: "flex",
        padding: "2ch",
        overflowY: "auto",
        flexGrow: 1,
        flexDirection: "column",
        width: "100%",
      }}
      initial={{
        opacity: 0,
        overflowY: "hidden",
        y: "var(--fade-distance)",
      }}
      animate={{
        opacity: 1,
        overflowY: "auto",
        transform: "translateY(0px)",
      }}
      transition={{
        delay: isFetchingFile ? 0 : 0.4,
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <div className={styles.root}>
        {isFetchingFile ? <Loader /> :

          <object data={file} type="application/pdf" width="100%" height="100%">
            <iframe src={file} width="100%" height="100%">
              <p>This browser does not support PDFs. Please download the PDF to view it:
                <a href={file}>Download PDF</a></p>
            </iframe>
          </object>
        }
        <motion.div
          layout
          style={{
            display: "flex",
            overflow: "hidden",
            justifyContent: "flex-end",
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
            delay: (work.length * 0.4) + .1,
            duration: 0.5,
            ease: "easeInOut",
          }}
        >
          <div className={styles.footer}>
            <ButtonCards cards={
              [{
                name: "← Back",
                onClick: () => { navigate(-1) },
                styles: null,
                enabled: true,
              }]
            } />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
