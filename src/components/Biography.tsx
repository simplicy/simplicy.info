import Package from "../../package.json";
import Avatar from "../sacred/Avatar";
import CardDouble from "../sacred/CardDouble";
import Divider from "../sacred/Divider";
import Indent from "../sacred/Indent";
import styles from "./Biography.module.scss";
import Me from "../assets/me.jpg";
import ActionButton from "../sacred/ActionButton";
import { items } from "../pages/Home.tsx";
import Tooltip from "../sacred/Tooltip.tsx";

export default function Biography() {

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
              <p>{Package.author}</p>
              <p style={{
                transition: "color 0.3s ease",
                color: "var(--theme-focused-foreground)",
              }}
              >Software Developer</p>
            </Indent>
            <div className={styles.icons}>
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
          </Avatar>
          <div className={styles.buttons}>
            {items.map((item, index) => (
              <ActionButton
                key={index}
                onClick={item.onClick}
                hotkey={item.openHotkey}
                icon={item.icon}
                className={styles.actionButton}
              />
            ))}
          </div>
        </div>
        <Divider type="DOUBLE" />
        <div className={styles.content}>
          I am a 28 year old Software Developer born and raised in South Florida. I have been building desktop applications since I was 16.
          Since then I have explored Web & Mobile development, Computer Repair, Devops, Game development,
          AI, Microcontrollers, Micro-Soldering, and Drones.
          Education is a continuous journey for me, and I am always looking to learn new things, whether it be a new programming language, a new paradigm, or a new skill.
          Currently, I am working on a few personal projects, including an multi-platform outfit planner, and some rust based desktop applications.
          <br />
          Fashion is also big part of my life, wanting to learn more I turned to sewing in order to create my own clothes and bags.
        </div>
      </CardDouble>
    </div>
  )
}
