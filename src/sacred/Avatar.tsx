import styles from './Avatar.module.scss';

import * as React from 'react';
import * as Utilities from '../common/utilities';

interface AvatarProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'style' | 'className' | 'children'> {
  src?: string;
  href?: string;
  placeholder?: boolean;
  className?: string;
  target?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const Avatar: React.FC<AvatarProps> = (props) => {
  const { src, className: cls, placeholder = true, style: propStyle, href, target, children, ...rest } = props;

  const backgroundStyle = src ? { backgroundImage: `url(${src})` } : {};

  const combinedStyle = { ...propStyle, ...backgroundStyle, };

  let avatarElement: React.ReactElement;
  if (href) {
    if (placeholder) {
      avatarElement = <a className={Utilities.classNames(src ? styles.root : styles.placeholder, cls)} style={combinedStyle} href={href} target={target} tabIndex={0} role="link" />;
    }
    else {
      if (src) {
        avatarElement = <a className={Utilities.classNames(styles.root, cls)} style={combinedStyle} href={href} target={target} tabIndex={0} role="link" />;
      }
      else {
        avatarElement = <></>
      }
    }
  } else {
    if (placeholder) {
      avatarElement = <figure className={Utilities.classNames(src ? styles.root : styles.placeholder, cls)} style={combinedStyle} />;
    }
    else {
      if (src) {
        avatarElement = <figure className={Utilities.classNames(styles.root, cls)} style={combinedStyle} />;
      }
      else {
        avatarElement = <></>
      }
    }
  }


  if (!children) {
    return avatarElement;
  }

  return (
    <div className={styles.parent} {...rest}>
      {avatarElement}
      <span className={styles.right}>{children}</span>
    </div>
  );
};

export default Avatar;
