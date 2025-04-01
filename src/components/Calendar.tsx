import { useEffect, useState } from 'react';
import styles from './Calendar.module.scss';
import { motion } from 'framer-motion';
import Quote from './Quote';
import { useContext } from './page/Context';
export default function Calendar() {
  const { currentMonth } = useContext() as {
    currentMonth: number,
  };
  let [count, setCount] = useState(0);
  // Array
  let months_arr = [
    "Jan", "Feb", "Mar", "Apr",
    "May", "Jun", "Jul", "Aug",
    "Sep", "Oct", "Nov", "Dec"
  ];
  // Builds View
  let buildView = () => {
    return months_arr.map((month, index) => {
      return (
        <div key={index} id={index.valueOf.toString()} className={styles.default}>
          {month}
        </div>
      );
    });
  }
  // Toggle Month
  let toggleMonth = () => {
    let divs = document.getElementsByClassName(styles.default);
    for (let i = 0; i < divs.length; i++) {
      if (i <= count && i <= currentMonth) {
        divs[i].classList.add(styles.active);
        if (i === count) {
          setCount(count + 1);
          break;
        }
      } else {
        divs[i].classList.remove(styles.active);
      }
    }

  }
  // Loops through months when component mounts when count updates
  useEffect(() => {
    setTimeout(() => {
      toggleMonth();
    }, 750);
  }, [count]);

  // View
  return (
    <>
      <motion.div
        layout
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          alignContent: "center",
        }}
        initial={{ opacity: 1, }}
        animate={{ opacity: 0, display: "none" }}
        transition={{
          delay: currentMonth + .25,
          duration: 0.5,
          ease: "easeInOut",
        }}
      >
        <div className={styles.root}>
          <div className={styles.container}>
            {buildView()}
          </div>
        </div>
      </motion.div>
      <Quote />
    </>
  );
}
