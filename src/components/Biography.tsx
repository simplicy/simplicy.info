import Package from "../../package.json";
import { motion } from "framer-motion";
import Avatar from "../sacred/Avatar";
import CardDouble from "../sacred/CardDouble";
import Divider from "../sacred/Divider";
import Indent from "../sacred/Indent";
import styles from "./style/Biography.module.scss";
import Me from "../common/assets/me.png";
import ActionButton from "../sacred/ActionButton";
import Tooltip from "../sacred/Tooltip.tsx";
import { items } from "../common/vars.ts";
import ButtonCards from "./ButtonCards.tsx";
import { useNavigate } from "react-router-dom";
import { bio } from "../common/vars.ts";
export default function Biography() {
  let navigate = useNavigate();
  let birthDate = new Date('1997-06-16');
  let age = new Date().getFullYear() - birthDate.getFullYear();
  let intro = "I am a " + age + " year old Software Developer born and raised in South Florida.";
  // let song = "Yeat - 2TONE";
  // let game = "RV There Yet?";
  // let location = "USA";
  return (
    <div className={styles.root}>
      <CardDouble title="Bio">
        <div className={styles.desc}>
          <Avatar src={Me} target="_blank" style={{
            width: "7ch",
            height: "7ch",
          }}>
            <Indent style={{
              display: "flex",
              flexDirection: "column",
              fontSize: "2ch",
              fontWeight: "bold",
              justifyContent: "space-between",
            }}>
              <p className="scramble" title={Package.author}>000000000000000000</p>
              <p
                className="scramble"
                style={{
                  transition: "color 0.3s ease",
                  color: "var(--theme-focused-foreground)",
                }}
                title={bio.title}
              >000000000000000000</p>
            </Indent>
            <div className={styles.icons}>
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
                      className={styles.actionButton}
                    />
                  </Tooltip>
                )
              })}
            </div>
          </Avatar>
          <div className={styles.buttons}>
            {items.map((item, index) => {
              if (!item.enabled) return null;
              return (
                <ActionButton
                  key={index}
                  onClick={item.onClick}
                  hotkey={item.openHotkey}
                  icon={item.icon}
                  className={styles.actionButton}
                />
              )
            })}
          </div>
        </div>
        <Divider type="DOUBLE" />
        {intro}
        {bio.description}
      </CardDouble>
      {window.location.pathname === "/bio" &&
        <motion.div
          layout
          style={{
            display: "flex",
            overflow: "hidden",
            padding: "1ch",
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
      }

    </div>
  )
}
