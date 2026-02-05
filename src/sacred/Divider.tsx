import styles from './Divider.module.scss';

import * as React from 'react';

interface DividerProps extends React.HTMLAttributes<HTMLSpanElement> {
  type?: string | any;
  style?: any;
}

const Divider: React.FC<DividerProps> = ({ style, type }) => {
  if (type === 'GRADIENT') {
    return <div className={styles.gradient} style={style} id='divider' />;
  }

  if (type === 'DOUBLE') {
    return (
      <div className={styles.divider} style={style} id="divider">
        <div className={styles.line} style={{ marginBottom: `2px` }} />
        <div className={styles.line} />
      </div>
    );
  }

  return (
    <div className={styles.divider} style={style} id="divider">
      <div className={styles.line} />
    </div>
  );
};

export default Divider;
