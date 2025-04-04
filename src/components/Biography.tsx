import Package from "../../package.json";
import Avatar from "../sacred/Avatar";
import CardDouble from "../sacred/CardDouble";
import Divider from "../sacred/Divider";
import Indent from "../sacred/Indent";
import styles from "./Biography.module.scss";
import Me from "../assets/me.jpg";
import ActionButton from "../sacred/ActionButton";
import Insta from "../assets/insta.svg";
import XLogo from "../assets/x.svg";
import LinkedIn from "../assets/linkedin.svg";
import Github from "../assets/github.svg";


let items = [
  {
    icon: XLogo,
    openHotkey: 'Twitter',
    onClick: () => { window.open("https://x.com/simplicy_", "_blank") }
  },
  {
    icon: Github,
    openHotkey: 'GitHub',
    onClick: () => { window.open("https://github.com/simplicy", "_blank") }
  },
  {
    icon: Insta,
    openHotkey: 'Instagram',
    onClick: () => { window.open("https://instagram.com/simplicy_", "_blank") },
  },
  {
    icon: LinkedIn,
    openHotkey: 'LinkedIn',
    onClick: () => { window.open("https://linkedin.com/in/sean-p-hopkins", "_blank") },
  }
];

export default function Biography() {

  return (
    <div className={styles.root}>

      <CardDouble title="Bio">
        <div className={styles.desc}>
          <Avatar src={Me} target="_blank">
            <Indent>
              {Package.author}
              <br />
              Software Developer
            </Indent>

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
          Since then I have explored web development, IT management, devops, game development, AI model training, microcontrollers and mobile applications.
          Education is a continuous journey for me, and I am always looking to learn new things, whether it be a new programming language, a new paradigm, or a new skill.
          Currently, I am working on a few personal projects, including an multi-platform outfit planner, and some rust based desktop applications.
          <br />
          Fashion is also big part of my life, wanting to learn more I turned to sewing in order to create my own clothes and bags.
        </div>
      </CardDouble>
    </div>
  )
}
