import Package from "../../package.json";
import Avatar from "../sacred/Avatar";
import CardDouble from "../sacred/CardDouble";
import Divider from "../sacred/Divider";
import Indent from "../sacred/Indent";
import styles from "./Biography.module.scss";

export default function Biography() {

  return (
    <div className={styles.root}>

      <CardDouble title="Bio">
        <Avatar src="../me.jpg" target="_blank">
          <Indent>
            {Package.author}
            <br />
            Software Developer
          </Indent>
        </Avatar>
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
