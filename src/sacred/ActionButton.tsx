import styles from './ActionButton.module.scss';

import * as React from 'react';
import * as Utilities from '../common/utilities';

interface ActionButtonProps {
  onClick?: () => void;
  hotkey?: any;
  children?: React.ReactNode;
  style?: any;
  rootStyle?: any;
  isSelected?: boolean;
  icon?: any;
  className?: any;
}

const ActionButton = React.forwardRef<HTMLDivElement, ActionButtonProps>(({ onClick, hotkey, children, style, rootStyle, isSelected, icon, className }, ref) => {
  let classNames = Utilities.classNames(styles.icon, styles.hotkey);
  let cn = Utilities.classNames(className ? className : null, styles.content);
  return (
    <div className={Utilities.classNames(styles.root, rootStyle, isSelected ? styles.selected : null)} onClick={onClick} tabIndex={0} ref={ref} role="button">
      {Utilities.isEmpty(hotkey) ? null : <span className={styles.hotkey}>{hotkey}</span>}
      {Utilities.isEmpty(icon) ? null : <span className={classNames}> <img src={icon} className={classNames} /></span>}
      {!children ? null :
        <span className={cn} style={style}>
          {children}
        </span>
      }
    </div>
  );
});

ActionButton.displayName = 'ActionButton';

export default ActionButton;
