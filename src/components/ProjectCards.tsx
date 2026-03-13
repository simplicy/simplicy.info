import { motion } from "framer-motion";
import { toast } from "react-toastify";
import Copy from "../common/assets/copy.svg";
import Badge from "../sacred/Badge";
import styles from "./style/ProjectCards.module.scss";
import Avatar from "../sacred/Avatar";
import Divider from "../sacred/Divider";
import ActionButton from "../sacred/ActionButton";
import Gitea from "../common/assets/gitea.svg";
import Link from "../common/assets/link.svg";

export default function ProjectCards({ cards, placeholder = false }: any) {
  return cards.map((app: any, i: any) => {
    return (
      <motion.div
        style={{
          display: "flex",
          overflowY: "auto",
        }}
        initial={{
          opacity: 0,
          overflowY: "hidden",
          y: "var(--fade-distance)",
        }}
        animate={{
          opacity: 1,
          overflowY: "auto",
          transform: "translateY(0px)",
        }}
        transition={{
          delay: (i * 0.3),
          duration: 0.5,
          ease: "easeInOut",
        }}
      >
        <div className={styles.app} >
          <div className={styles.header}>
            <Avatar
              placeholder={placeholder}
              src={app.image && app.image} target="_blank" style={{
                width: "5em",
                height: "5em",
              }}>
            </Avatar>
            <div className={styles.appHeader}>
              <div style={{
                padding: placeholder ? "0 0 0 1ch" : "0",
                display: "flex",
                flexDirection: "column",
                width: "100%",
                fontSize: "2ch",
                fontWeight: "bold",
                justifyContent: "space-between",
              }}>
                <p className={styles.appName}>{app.name}</p>
                <div className={styles.appButtons}>
                  {app.link &&
                    <ActionButton
                      icon={Link}
                      onClick={() => {
                        if (app.link && app.link !== "") {
                          window.open(app.link, "_blank");
                        }
                      }}
                      hotkey="View"
                    />
                  }
                  {app.copytext &&
                    <ActionButton
                      icon={Copy}
                      onClick={() => {
                        if (app.copytext && app.copytext !== "") {
                          navigator.clipboard.writeText(app.copytext);
                          toast.info("Copied to clipboard");
                        }
                      }}
                      hotkey="Connect"
                    />
                  }
                  {app.git &&
                    <ActionButton
                      icon={Gitea}
                      onClick={() => {
                        if (app.git && app.git !== "") {
                          window.open(app.git, "_blank");
                        }
                      }}
                      hotkey="Git"
                    />
                  }
                </div>

              </div>
              <span className={styles.appHeader_1}>
                <span className={styles.appTags}>
                  {app.tags.map((tag: string, i: any) =>
                    <Badge key={i + tag + app.name}>
                      {tag}
                    </Badge>
                  )}
                </span>
                <p className={styles.appDate}>{app.date}</p>
              </span>

            </div>
          </div>
          <p className={styles.appInfo}>{app.description}</p>
          <Divider type="DOUBLE" />
        </div>
      </motion.div>
    )
  })


}
