import { motion } from "framer-motion";
import styles from "./style/Projects.module.scss";
import { apps } from "../common/vars";
import ButtonCards from "../components/ButtonCards";
import { useNavigate } from "react-router-dom";
import Badge from "../sacred/Badge";
import Indent from "../sacred/Indent";
import Avatar from "../sacred/Avatar";
import Divider from "../sacred/Divider";
import ActionButton from "../sacred/ActionButton";
import Gitea from "../common/assets/gitea.svg";
import Link from "../common/assets/link.svg";
export default function Projects() {
  const navigate = useNavigate();

  return (
    <motion.div
      style={{
        display: "flex",
        padding: "2ch",
        outline: "none",
        overflowY: "auto",
        flexGrow: 1,
        flexDirection: "column",
        width: "100%",
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
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <div className={styles.root}>
        {apps.map((app: any, i: any) => {
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
                <Avatar src={app.image && app.image} target="_blank" style={{
                  width: "7ch",
                  height: "7ch",
                }}>
                  <Indent style={{
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

                  </Indent>
                  <span className={styles.appHeader}>
                    <span className={styles.appTags}>
                      {app.tags.map((tag: string, i: any) =>
                        <Badge key={i + tag + app.name}>
                          {tag}
                        </Badge>
                      )}
                    </span>
                    <p className={styles.appDate}>{app.date}</p>
                  </span>
                </Avatar>
                <p className={styles.appInfo}>{app.description}</p>
                <Divider type="DOUBLE" />
              </div>
            </motion.div>
          )
        })}
        <motion.div
          layout
          style={{
            display: "flex",
            overflow: "hidden",
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
            delay: (apps.length * 0.2) + .1,
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
      </div>
    </motion.div>
  );
}
