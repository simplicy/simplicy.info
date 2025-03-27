'use client';

import AlertBanner from '../sacred/AlertBanner';
import styles from './ButtonCard.module.scss';
import * as Utilities from '../common/utilities';


export default function ButtonCard({
  obj, onClick, index, styles: advStyle }: { obj: any, onClick?: () => void, index: number, styles: string | null }) {
  let adStyle = Utilities.classNames(advStyle, styles.base)
  return (
    <div className={advStyle ? adStyle : styles.base}>
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
            {obj.description && obj.description}
          </span>
        </div>
      </AlertBanner>
    </div>
  );
}

