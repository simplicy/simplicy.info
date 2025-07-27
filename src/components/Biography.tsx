import Package from "../../package.json";
import Avatar from "../sacred/Avatar";
import CardDouble from "../sacred/CardDouble";
import Divider from "../sacred/Divider";
import Indent from "../sacred/Indent";
import styles from "./style/Biography.module.scss";
import Me from "../common/assets/me.jpg";
import ActionButton from "../sacred/ActionButton";
import { items } from "../pages/Home.tsx";
import Tooltip from "../sacred/Tooltip.tsx";
import TextArea from "../sacred/TextArea.tsx";

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
        <TextArea
          value="I am a 28 year old Software Developer born and raised in South Florida. My free time is split between programming, gaming, sewing, or modding electronics. Currently working on a multi-platform outfit planner and a VoIP/Messaging application."
          isBlink />
      </CardDouble>
    </div>
  )
}
