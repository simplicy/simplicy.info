import styles from './Navbar.module.scss';
import Package from '../../../package.json';
import ActionButton from '../../sacred/ActionButton';
import { useContext } from "../page/Context";
export default function Navbar() {
  const {
    view,
    setView,
  } = useContext() as {
    view: string;
    setView: (view: string) => void;
  }
  return (
    <div className={styles.root}>
      {/* Navbar content goes here */}

      <div className={styles.title}>
        <h1>
          {Package.name.toUpperCase()}
        </h1>

        <span className={styles.blink}></span>
      </div>
      {view !== "" &&
        <ActionButton onClick={() => { setView("") }}>
          Back
        </ActionButton>
      }
    </div>
  );
}
