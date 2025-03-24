import styles from './AlertBanner.module.scss';

import * as React from 'react';
import * as Utilities from '../common/utilities';

interface AlertBannerProps {
  style?: any;
  onClick?: () => void;
  isSelected?: boolean;
  children?: any;
}

const AlertBanner: React.FC<AlertBannerProps> = ({ style: propStyle, onClick, isSelected, ...rest }) => {
  let style: React.CSSProperties = {
    ...propStyle,
    cursor: onClick ? 'pointer' : 'default',
  };
  let stylz = Utilities.classNames(styles.root, isSelected ? styles.selected : null);

  return (
    <div className={stylz} {...rest} style={style} onClick={onClick} />
  );
};

export default AlertBanner;
