import Package from "../../package.json";
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

export default function Biography() {
  let navigation = useNavigate();
  let birthDate = new Date('1997-06-16');
  let age = new Date().getFullYear() - birthDate.getFullYear();

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
        I am a {age} year old Software Developer born and raised in South Florida. My free time is split between programming, gaming, sewing, or modding electronics. Currently working on a multi-platform outfit planner and a VoIP/Messaging application.
      </CardDouble>
      {window.location.pathname === "/bio" &&
        <div className={styles.footer}>
          <ButtonCards cards={
            [{
              name: "Back",
              onClick: () => {
                navigation("/")
              },
              styles: null,
              enabled: true,
            }]

          } />
        </div>
      }
    </div>
  )
}
