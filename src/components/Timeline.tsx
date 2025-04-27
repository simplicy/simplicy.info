import Card from '../sacred/Card';
import styles from './style/Timeline.module.scss';
import { motion } from 'framer-motion';

interface TimelineProps {
  list: any[];
}
export default function Timeline({ list }: TimelineProps) {
  let buildTimeline = () => {
    let timeline = list.map((item: any, index: number) => {
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
            delay: index,
            duration: 0.5,
            ease: "easeInOut",
          }}
        >
          <div className={styles.root}>
            {index > 0 &&
              <div className={styles.line}></div>
            }
            <Card
              title={item.start + "-" + item.end}
              key={item.companyname + index} className={styles.content}>
              <div className={styles.title}>
                {item.title}
              </div>
              <div className={styles.companyname}>
                {item.companyname}
              </div>
              <div className={styles.date}>
              </div>
            </Card>
          </div>
        </motion.div>
      )
    })
    return timeline;

  }
  return (
    <>
      {buildTimeline()}
    </>
  );
}

