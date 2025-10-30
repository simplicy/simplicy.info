import styles from "./style/Homeview.module.scss";
import * as Utilities from "../common/utilities";
import Biography from "./Biography";
import Avatar from "../sacred/Avatar";
import { motion } from "framer-motion";
import { useContext } from "./page/Context";
import { useNavigate } from "react-router";
import { Card } from "../common/types";
import Tooltip from "../sacred/Tooltip";
import ActionButton from "../sacred/ActionButton";
import Package from "../../package.json";
import Me from "../common/assets/me.png";
import { items, links } from "../common/vars.ts";
import ButtonCards from "./ButtonCards";
import { useState } from "react";


export default function Homeview() {
  const navigate = useNavigate();
  const [onlink, setOnlink] = useState(false);
  const { delay } = useContext() as {
    delay: number,
  }
  // Add one to beginning of list
  let link: Card[] = [
    {
      name: "← Back",
      onClick: () => { setOnlink(false); },
      styles: null,
      enabled: true,
    },
    ...links,
  ];
  let cards: Card[] = [
    {
      name: "Bio",
      onClick: () => { navigate("bio"); },
      styles: styles.mobile,
      enabled: true,
    },
    {
      name: "Links",
      onClick: () => {
        setOnlink(true);
      },
      styles: null,
      enabled: true,
    },
    {
      name: "Resume",
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
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        width: "100%",
      }}
      initial={{
        display: "none",
        opacity: 0,
      }}
      animate={{
        display: "flex",
        opacity: 1,
      }}
      transition={{
        delay: delay,
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <div className={styles.root}>
        <div className={styles.desktop}>
          <Biography />
        </div>
        <div className={styles.switcher}>
          <div className={styles.cards}>
            <div className={Utilities.classNames(styles.mobile, styles.avi)}>
              <Avatar src={Me} target="_blank"
                className={styles.avatar}
              />
              @{Package.author}
              <p>
                Software Developer
              </p>
            </div>
            <div className={Utilities.classNames(styles.mobile, styles.buttons)}>
              {items.map((item, index) => {
                if (!item.enabled) return null;
                return (
                  <Tooltip
                    title={item.openHotkey}
                    key={index}
                  >
                    <ActionButton
                      key={index}
                      onClick={item.onClick}
                      icon={item.icon}
                    />
                  </Tooltip>
                )
              })}
            </div>
            {onlink ?
              <motion.div
                layout
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "center",
                  height: "100%",
                  width: "100%",
                }}
                initial={{
                  display: "none",
                  opacity: 0,
                }}
                animate={{
                  display: "flex",
                  opacity: 1,
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                }}
              >
                <div className={styles.buttoncards}>
                  <ButtonCards cards={link} />
                </div>
              </motion.div>
              :
              null
            }


            {onlink ? null :
              < motion.div
                layout
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "center",
                  height: "100%",
                  width: "100%",
                }}
                initial={{
                  display: "none",
                  opacity: 0,
                }}
                animate={{
                  display: "flex",
                  opacity: 1,
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                }}
              >
                <div className={styles.buttoncards}>

                  <ButtonCards cards={cards} />

                </div>
              </motion.div>
            }
          </div>
        </div>
      </div>
    </motion.div >
  );
}

