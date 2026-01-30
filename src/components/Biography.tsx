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
import { Game, Song } from "../common/types.tsx";
import { useEffect, useState } from "react";
import { scramble } from "../common/utilities.tsx";
import Badge from "../sacred/Badge.tsx";


export default function Biography() {
  let navigate = useNavigate();
  let birthDate = new Date('1997-06-16');
  let age = new Date().getFullYear() - birthDate.getFullYear();
  let intro = "I am a " + age + " year old Software Developer born and raised in South Florida.";
  const { delay, playing, isFetchingPlaying, refetchPlaying, nowplaying, refetchNowPlaying, isFetchingNowPlaying } = useContext() as {
    delay: number,
    playing: Game,
    nowplaying: Song,
    refetchPlaying: () => void,
    refetchNowPlaying: () => void,
    isFetchingPlaying: boolean,
    isFetchingNowPlaying: boolean,
  }
  // rund to nearest hour
  const [game, setGame] = useState("");
  const [gametime, setGametime] = useState(playing ? Math.round(playing?.playtime_forever / 60) + " hours" : "");
  const [song, setSong] = useState("Nothing playing");
  useEffect(() => {
    setGame(playing ? playing.name : "Nothing playing");
    setGametime(playing ? Math.round(playing.playtime_forever / 60) + " hours" : "");
  }, [playing]);

  useEffect(() => {
    if (!playing && !isFetchingPlaying) {
      refetchPlaying();
    }
    if (!nowplaying && !isFetchingNowPlaying) {
      refetchNowPlaying();
    }
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
  }, [playing, nowplaying]);
  useEffect(() => {
    setSong(nowplaying ?
      // "[" + nowplaying.album + "] " + 
      nowplaying.title + " - " + nowplaying.artist : "Nothing playing");
  }, [nowplaying]);


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

              <p className="scramble" title={Package.author}>0000000000</p>
              <p
                className="scramble"
                style={{
                  transition: "color 0.3s ease",
                  color: "var(--theme-focused-foreground)",
                }}
                title={bio.title}
              >0000000000</p>
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
            gap: "0.5ch",
          }}>
            <div className={styles.nowplaying}>
              <svg width="12px" height="12px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <title>steam</title>
                <path d="M18.102 12.129c0-0 0-0 0-0.001 0-1.564 1.268-2.831 2.831-2.831s2.831 1.268 2.831 2.831c0 1.564-1.267 2.831-2.831 2.831-0 0-0 0-0.001 0h0c-0 0-0 0-0.001 0-1.563 0-2.83-1.267-2.83-2.83 0-0 0-0 0-0.001v0zM24.691 12.135c0-2.081-1.687-3.768-3.768-3.768s-3.768 1.687-3.768 3.768c0 2.081 1.687 3.768 3.768 3.768v0c2.080-0.003 3.765-1.688 3.768-3.767v-0zM10.427 23.76l-1.841-0.762c0.524 1.078 1.611 1.808 2.868 1.808 1.317 0 2.448-0.801 2.93-1.943l0.008-0.021c0.155-0.362 0.246-0.784 0.246-1.226 0-1.757-1.424-3.181-3.181-3.181-0.405 0-0.792 0.076-1.148 0.213l0.022-0.007 1.903 0.787c0.852 0.364 1.439 1.196 1.439 2.164 0 1.296-1.051 2.347-2.347 2.347-0.324 0-0.632-0.066-0.913-0.184l0.015 0.006zM15.974 1.004c-7.857 0.001-14.301 6.046-14.938 13.738l-0.004 0.054 8.038 3.322c0.668-0.462 1.495-0.737 2.387-0.737 0.001 0 0.002 0 0.002 0h-0c0.079 0 0.156 0.005 0.235 0.008l3.575-5.176v-0.074c0.003-3.12 2.533-5.648 5.653-5.648 3.122 0 5.653 2.531 5.653 5.653s-2.531 5.653-5.653 5.653h-0.131l-5.094 3.638c0 0.065 0.005 0.131 0.005 0.199 0 0.001 0 0.002 0 0.003 0 2.342-1.899 4.241-4.241 4.241-2.047 0-3.756-1.451-4.153-3.38l-0.005-0.027-5.755-2.383c1.841 6.345 7.601 10.905 14.425 10.905 8.281 0 14.994-6.713 14.994-14.994s-6.713-14.994-14.994-14.994c-0 0-0.001 0-0.001 0h0z"></path>
              </svg>
              {isFetchingPlaying ?
                <Loader />
                :
                <>
                  <p id="game" className="scramble"
                    onClick={() => {
                      let url = "https://store.steampowered.com/app/" + playing.appid;
                      window.open(url, "_blank");
                    }}
                    title={game}>000000000000</p>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: isFetchingPlaying ? 0.3 : 1, duration: 0.5, ease: "easeInOut" }}
                  >
                    <Badge id="time">{gametime}</Badge>
                  </motion.div>
                </>
              }
            </div>
            <div className={styles.nowplaying}>
              <div className={nowplaying?.title ? styles.spinner : styles.normal}>
                <svg width="12px" height="12px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M12,23 C5.92486775,23 1,18.0751322 1,12 C1,5.92486775 5.92486775,1 12,1 C18.0751322,1 23,5.92486775 23,12 C23,18.0751322 18.0751322,23 12,23 Z M12,21 C16.9705627,21 21,16.9705627 21,12 C21,7.02943725 16.9705627,3 12,3 C7.02943725,3 3,7.02943725 3,12 C3,16.9705627 7.02943725,21 12,21 Z M12,7 L12,5 C15.8659932,5 19,8.13400675 19,12 L17,12 C17,9.23857625 14.7614237,7 12,7 Z M12,15 C10.3431458,15 9,13.6568542 9,12 C9,10.3431458 10.3431458,9 12,9 C13.6568542,9 15,10.3431458 15,12 C15,13.6568542 13.6568542,15 12,15 Z M12,13 C12.5522847,13 13,12.5522847 13,12 C13,11.4477153 12.5522847,11 12,11 C11.4477153,11 11,11.4477153 11,12 C11,12.5522847 11.4477153,13 12,13 Z" />
                </svg>
              </div>
              {isFetchingNowPlaying ?
                <Loader />
                :
                <>
                  <p
                    className="scramble"
                    title={song}
                  >00000000000000</p>
                </>
              }
            </div>
          </div>
          <div className={styles.nowplaying}>
            <div className={styles.nowplaying}>
              <svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                width="12px" height="12px" viewBox="0 0 64 64" enableBackground="new 0 0 64 64" >
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
