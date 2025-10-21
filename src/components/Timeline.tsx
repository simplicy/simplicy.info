import { useState } from 'react';
import Card from '../sacred/Card';
import Divider from '../sacred/Divider';
import styles from './style/Timeline.module.scss';
import { motion } from 'framer-motion';

interface TimelineProps {
  list: any[];
}
export default function Timeline({ list }: TimelineProps) {
  let buildTimeline = () => {
    let timeline = list.map((item: any, index: number) => {
      let [showDescription, setShowDescription] = useState(false);
      return (
        <motion.div
          key={index}
          layout
          style={{
            display: "flex",
            overflow: "hidden",
            justifyContent: "center",
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
            delay: index * .5,
            duration: 0.5,
            ease: "easeInOut",
          }}
        >
          <div className={styles.box}>
            {index > 0 &&
              <div className={styles.line}
                style={{ height: (item.end - item.start) * 20 }}
              ></div>
            }
            <Card
              title={item.start + "-" + item.end}
              key={item.companyname + index} className={styles.content}>
              <div className={styles.exp}
                onClick={() => setShowDescription(!showDescription)}
              >
                {showDescription ? "-" : "+"}
              </div>
              <div className={styles.title}>
                {item.title}
              </div>
              <div className={styles.companyname}>
                {item.companyname}
              </div>
              <div className={styles.date}>
              </div>
              {showDescription &&
                <div className={styles.description}>
                  <Divider type="DOUBLE" />
                  <ul>
                    {item.notes.map((note: string, noteIndex: number) => (
                      <li key={noteIndex} className={styles.descriptioncontent}>
                        {note}
                      </li>
                    ))}
                  </ul>
                </div>
              }
            </Card>
          </div>
        </motion.div >
      )
    })
    return timeline;

  }
  return (
    <div className={styles.root}>
      {buildTimeline()}
    </div>
  );
}

