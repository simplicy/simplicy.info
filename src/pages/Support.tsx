import { motion } from 'framer-motion';
//import ButtonCards from '../components/ButtonCards.tsx';
import styles from "../components/style/Support.module.scss"
import { donate_links } from '../common/vars.ts';
import ActionButton from '../sacred/ActionButton.tsx';
import Tooltip from '../sacred/Tooltip.tsx';
import ButtonCards from '../components/ButtonCards.tsx';
import { useNavigate } from 'react-router-dom';

export default function Support() {
  const navigate = useNavigate();
  return (
    <motion.div
      layout
      style={{
        display: "flex",
        justifyContent: "center",
        overflowY: "auto",
        flexDirection: "column",
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
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <div className={styles.root}>
        <p>
          If you would like to support me or my work, there are a couple ways to do so.
        </p>
        <div className={styles.header} >
          {donate_links.map((link, index) => (
            <div className={styles.item} >
              <Tooltip
                key={index}
                title="Copy to clipboard"
              >
                <ActionButton
                  key={index}
                  onClick={link.onClick}
                  hotkey={link.name}
                  icon={link.icon}
                />
              </Tooltip>
            </div>
          ))}
        </div>
      </div>
      <motion.div
        layout
        style={{
          display: "flex",
          overflow: "hidden",
          maxWidth: "50ch",
          alignSelf: "center",
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
      {/* <div className={styles.links} > */}
      {/*   <ButtonCards cards={donate_links} /> */}
      {/* </div> */}
    </motion.div >
  )
}
