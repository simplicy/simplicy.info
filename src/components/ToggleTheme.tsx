import { motion } from "framer-motion";
import { useState } from "react";
import Cookies from 'js-cookie';
import styles from "./style/ToggleTheme.module.scss";
import * as Utilities from "../common/utilities";
import Moon from "../common/assets/moon.svg";
import Sun from "../common/assets/sun.svg";
export default function ToggleTheme() {
  const [theme, setTheme] = useState(Cookies.get("theme") === "Black Midnight Vapor" ? "dark" : "light");
  const toggleTheme = () => {
    if (theme === "light") {
      Utilities.onHandleThemeChange('theme-dark')
      Cookies.set('theme', 'Black Midnight Vapor', { expires: 365 })
      setTheme("dark")
    }
    else {
      Utilities.onHandleThemeChange('')
      Cookies.set('theme', 'Refined White [DEFAULT]', { expires: 365 }) // eslint-disable-line no-undef
      setTheme("light")
    }
  }
  return (
    <>
      <motion.div
        layout
        style={{
          display: "flex",
          justifyContent: "flex-end",
          height: "100%",
          width: "100%",
        }}
        animate={{ opacity: 1, }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}>
        {theme === "dark" ? <>
          <div className={styles.theme}>
            <img
              className={styles.img}
              onClick={toggleTheme}
              src={Moon}
            />
          </div>
        </> : <>
          <div className={styles.theme}>
            <img
              className={styles.img}
              onClick={toggleTheme}
              src={Sun}
            />
          </div>
        </>}
      </motion.div >
    </>
  );
}
