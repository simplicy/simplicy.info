import styles from '../style/Banner.module.scss';
import { banner } from "../../common/vars";
import * as utilities from "../../common/utilities";
import Cookies from 'js-cookie';
export default function Banner() {
  if (!banner.enabled || Cookies.get("bannerDismissed")) return null;
  let text = () => {
    let final = banner.message;
    for (let i = 0; i < banner.repeated; i++) {
      final = final + banner.separator + banner.message;
    }
    return final;
  }
  let foot = () => {
    return (
      <div className={styles.root}
        id="banner"
      >
        <div className={utilities.classNames(styles.text, banner.link ? styles.link : "")}
          onClick={() => {
            if (banner.link) {
              window.open(banner.link, '_blank');
            }
          }}
        >
          <span>
            {text()}
          </span>
        </div>
        <div className={styles.overlay}
          onClick={() => {
            document.getElementById("banner")?.remove();
            Cookies.set("bannerDismissed", "true", { expires: 7 });
          }}
        ><span>X</span>
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
