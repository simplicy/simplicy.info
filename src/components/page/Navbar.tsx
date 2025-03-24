import styles from './Navbar.module.scss';
import Package from '../../../package.json';
export default function Navbar() {
  return (
    <div className={styles.root}>
      {/* Navbar content goes here */}

      <div className={styles.title}>
        <h1>
          {Package.name.toUpperCase()}
        </h1>

        <span className={styles.blink}></span>
      </div>
    </div>
  );
}
