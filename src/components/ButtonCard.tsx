'use client';

import AlertBanner from '../sacred/AlertBanner';
import styles from './ButtonCard.module.scss';

export default function ButtonCard({ obj, onClick, index }: { obj: any, onClick?: () => void, index: number }) {
  return (
    <>
      <AlertBanner
        key={obj.id + index}
        onClick={() => {
          if (onClick) {
            onClick();
          }
        }}
      >
        <div className={styles.root}>
          <span className={styles.box}>
            <div className={styles.title}>
              {obj.name}
            </div>
          </span>
        </div>
      </AlertBanner>
    </>
  );
}

