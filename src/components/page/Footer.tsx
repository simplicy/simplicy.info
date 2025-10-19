import styles from '../style/Footer.module.scss';
import { useNavigate } from 'react-router-dom';
export default function Footer() {
  let navigate = useNavigate();

  let foot = () => {
    return (
      <div className={styles.root}>
        <div className={styles.text}
          onClick={() => {
            navigate("support");
          }}
        >
          ❤
        </div>
      </div >
    );
  }
  return (
    <>
      {foot()}
    </>
  );
}
