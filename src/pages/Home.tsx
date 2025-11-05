import { useEffect } from 'react';
import { useContext } from '../components/page/Context';
import Cookies from "js-cookie";
import Homeview from '../components/Homeview';

function Home() {
  const { delay } = useContext() as {
    delay: number,
  }
  useEffect(() => {
    // On first load of the hour add cookie. If cookie exists, skip animation
    setTimeout(() => {
      if (!Cookies.get("intro")) {
        Cookies.set("intro", "true", { expires: 1 });//expires in 1 day
      }
    }, 1000 * delay);
  }, []);


  return (
    <div
      style={{
        height: "100%",
        padding: "2ch",
        width: "100%",
      }}

    >
      <Homeview />
    </div>
  );
}

export default Home
