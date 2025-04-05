import styles from "./Homeview.module.scss";
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
import Me from "../assets/me.jpg";
import { items } from "../pages/Home";
import ButtonCards from "./ButtonCards";


export default function Homeview() {
  const navigate = useNavigate();
  const { delay } = useContext() as {
    delay: number,
  }
  let cards: Card[] = [
    {
      name: "Bio",
      onClick: () => { navigate("bio"); },
      styles: styles.mobile,
      enabled: true,
    },
    {
      name: "Links",
      onClick: () => { navigate("links") },
      styles: null,
      enabled: true,
    },
    {
      name: "Portfolio",
      onClick: () => { navigate("portfolio"); },
      styles: null,
      enabled: true,
    },
    {
      name: "Work",
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
        y: "var(--fade-distance)",
      }}
      animate={{
        display: "flex",
        opacity: 1,
        transform: "translateY(0px)",
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
            </div>
            <div className={Utilities.classNames(styles.mobile, styles.buttons)}>
              {items.map((item, index) => (
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
              ))}
            </div>
            <ButtonCards cards={cards} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

