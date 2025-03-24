'use client';

import AlertBanner from '../sacred/AlertBanner';
import styles from './ButtonCard.module.scss';

export default function ButtonCard({
  obj, onClick, index, styles: advStyle }: { obj: any, onClick?: () => void, index: number, styles: string | null }) {
  return (
    <div className={advStyle ? advStyle : ''}>
      <AlertBanner
        key={obj.name + index}
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
    </div>
  );
}

