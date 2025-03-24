import Package from "../../package.json";
import Avatar from "../sacred/Avatar";
import CardDouble from "../sacred/CardDouble";
import Divider from "../sacred/Divider";
import Indent from "../sacred/Indent";
import styles from "./Bio.module.scss";

export default function Bio() {

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
          I am a 28 year old Software Developer from the FL. I have been building desktop applications since I was 16,
          and have since dabbled in web development, IT management, devops, game development, AI, microcontrollers and mobile applications.
          Currently, I am working on a few personal projects, including an multi-platform outfit planner, and some rust based desktop applications.
          Fashion is also big part of my life, and I love to express myself through the clothing i wear or the clothes I make.
          Education is a continuos journey for me, and I am always looking to learn new things, whether it be a new programming language, a new paradigm, or a new skill.
        </div>
        <br />
        <br />
        Simply sympil.
      </CardDouble>
    </div>
  )
}
