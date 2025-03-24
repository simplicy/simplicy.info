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
          Thank you for visiting my personal website.
          I am a software developer with a passion for building user-friendly applications.
          I enjoy working with modern web technologies and continuously learning new skills
          to improve my craft. I have been building linux applications for the past 5 years
          since moving entirely over to it. I enjoy building things I can actually use in my
          daily life.
        </div>
      </CardDouble>
    </div>
  )
}
