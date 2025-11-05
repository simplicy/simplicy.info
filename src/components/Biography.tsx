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
import { useContext } from "./page/Context.tsx";
import Loader from "./page/Loader.tsx";
import { Game } from "../common/types.tsx";
import { useEffect, useState } from "react";
import { scramble } from "../common/utilities.tsx";


export default function Biography() {
  let navigate = useNavigate();
  let birthDate = new Date('1997-06-16');
  let age = new Date().getFullYear() - birthDate.getFullYear();
  let intro = "I am a " + age + " year old Software Developer born and raised in South Florida.";
  const { delay, playing, isFetchingPlaying, refetchPlaying } = useContext() as {
    delay: number,
    playing: Game[],
    refetchPlaying: () => void,
    isFetchingPlaying: boolean,
  }
  // rund to nearest hour
  const [game, setGame] = useState("");
  const [gametime, setGametime] = useState(playing ? Math.round(playing[0]?.playtime_forever / 60) + " hours" : "");
  const [song, _setSong] = useState("No recent songs");
  useEffect(() => {
    setGame(playing && playing.length > 0 ? playing[0].name : "Not Currently Playing");
    setGametime(playing && playing.length > 0 ? Math.round(playing[0].playtime_forever / 60) + " hours" : "");
  }, [playing]);


  useEffect(() => {
    if (!playing || playing.length == 0)
      refetchPlaying();
    setTimeout(() => {
      const links = document.querySelectorAll('.scramble');
      for (const link of links) {
        scramble({ target: link });
      }
    }, 500);
  }, []);


  useEffect(() => {
    const links = document.querySelectorAll('.scramble');
    setTimeout(() => {
      for (const link of links) {
        scramble({ target: link });
      }
    }, delay * 1000 + 200);
  }, [playing]);

  while (isFetchingPlaying) {
    return (

      <div className={styles.root}>
        <Loader />
      </div>
    )
  }
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
              width: "100%",
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
        <Divider type="DOUBLE" />

        <div style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}>
          <div style={{
            display: "flex",
            flexDirection: "column",
          }}>
            <div className={styles.nowplaying}>
              <svg width="12px" height="12px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <title>steam</title>
                <path d="M18.102 12.129c0-0 0-0 0-0.001 0-1.564 1.268-2.831 2.831-2.831s2.831 1.268 2.831 2.831c0 1.564-1.267 2.831-2.831 2.831-0 0-0 0-0.001 0h0c-0 0-0 0-0.001 0-1.563 0-2.83-1.267-2.83-2.83 0-0 0-0 0-0.001v0zM24.691 12.135c0-2.081-1.687-3.768-3.768-3.768s-3.768 1.687-3.768 3.768c0 2.081 1.687 3.768 3.768 3.768v0c2.080-0.003 3.765-1.688 3.768-3.767v-0zM10.427 23.76l-1.841-0.762c0.524 1.078 1.611 1.808 2.868 1.808 1.317 0 2.448-0.801 2.93-1.943l0.008-0.021c0.155-0.362 0.246-0.784 0.246-1.226 0-1.757-1.424-3.181-3.181-3.181-0.405 0-0.792 0.076-1.148 0.213l0.022-0.007 1.903 0.787c0.852 0.364 1.439 1.196 1.439 2.164 0 1.296-1.051 2.347-2.347 2.347-0.324 0-0.632-0.066-0.913-0.184l0.015 0.006zM15.974 1.004c-7.857 0.001-14.301 6.046-14.938 13.738l-0.004 0.054 8.038 3.322c0.668-0.462 1.495-0.737 2.387-0.737 0.001 0 0.002 0 0.002 0h-0c0.079 0 0.156 0.005 0.235 0.008l3.575-5.176v-0.074c0.003-3.12 2.533-5.648 5.653-5.648 3.122 0 5.653 2.531 5.653 5.653s-2.531 5.653-5.653 5.653h-0.131l-5.094 3.638c0 0.065 0.005 0.131 0.005 0.199 0 0.001 0 0.002 0 0.003 0 2.342-1.899 4.241-4.241 4.241-2.047 0-3.756-1.451-4.153-3.38l-0.005-0.027-5.755-2.383c1.841 6.345 7.601 10.905 14.425 10.905 8.281 0 14.994-6.713 14.994-14.994s-6.713-14.994-14.994-14.994c-0 0-0.001 0-0.001 0h0z"></path>
              </svg>
              <p id="game" className="scramble"
                onClick={() => {
                  let url = "https://store.steampowered.com/app/" + playing[0].appid;
                  window.open(url, "_blank");
                }}
                title={game}>000000000000000000</p>
              <p id="time" className="scramble" title={" - " + gametime}>000000</p>
            </div>
            <div className={styles.nowplaying}>
              <svg width="12px" height="12px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <g id="Page-1" stroke="none" strokeWidth="1" fillRule="evenodd">
                  <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7479.000000)" >
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                      <path d="M99.915,7327.865 C96.692,7325.951 91.375,7325.775 88.297,7326.709 C87.803,7326.858 87.281,7326.58 87.131,7326.085 C86.981,7325.591 87.26,7325.069 87.754,7324.919 C91.287,7323.846 97.159,7324.053 100.87,7326.256 C101.314,7326.52 101.46,7327.094 101.196,7327.538 C100.934,7327.982 100.358,7328.129 99.915,7327.865 L99.915,7327.865 Z M99.81,7330.7 C99.584,7331.067 99.104,7331.182 98.737,7330.957 C96.05,7329.305 91.952,7328.827 88.773,7329.792 C88.36,7329.916 87.925,7329.684 87.8,7329.272 C87.676,7328.86 87.908,7328.425 88.32,7328.3 C91.951,7327.198 96.466,7327.732 99.553,7329.629 C99.92,7329.854 100.035,7330.334 99.81,7330.7 L99.81,7330.7 Z M98.586,7333.423 C98.406,7333.717 98.023,7333.81 97.729,7333.63 C95.381,7332.195 92.425,7331.871 88.944,7332.666 C88.609,7332.743 88.274,7332.533 88.198,7332.197 C88.121,7331.862 88.33,7331.528 88.667,7331.451 C92.476,7330.58 95.743,7330.955 98.379,7332.566 C98.673,7332.746 98.766,7333.129 98.586,7333.423 L98.586,7333.423 Z M94,7319 C88.477,7319 84,7323.477 84,7329 C84,7334.523 88.477,7339 94,7339 C99.523,7339 104,7334.523 104,7329 C104,7323.478 99.523,7319.001 94,7319.001 L94,7319 Z" id="spotify-[#162]">

                      </path>
                    </g>
                  </g>
                </g>
              </svg>
              <p
                className="scramble"
                title={song}
              >000000000000000000</p>
            </div>
          </div>
          <div className={styles.nowplaying}>
            <div className={styles.nowplaying}>
              <svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                width="12px" height="12px" viewBox="0 0 64 64" enable-background="new 0 0 64 64" >
                <path d="M32,0C18.746,0,8,10.746,8,24c0,5.219,1.711,10.008,4.555,13.93c0.051,0.094,0.059,0.199,0.117,0.289l16,24
	C29.414,63.332,30.664,64,32,64s2.586-0.668,3.328-1.781l16-24c0.059-0.09,0.066-0.195,0.117-0.289C54.289,34.008,56,29.219,56,24
	C56,10.746,45.254,0,32,0z M32,32c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z"/>
              </svg>
              <p
                className="scramble"
                title="USA"
              >000</p>
            </div>
          </div>
        </div>
      </CardDouble >
      {
        window.location.pathname === "/bio" &&
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

    </div >
  )
}
