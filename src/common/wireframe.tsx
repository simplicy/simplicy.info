import { Outlet } from "react-router-dom";
import Loader from "../components/page/Loader";
import DebugGrid from "../sacred/DebugGrid";
import DefaultLayout from "../sacred/page/DefaultLayout";
import Row from "../sacred/Row";
import ModalStack from "../sacred/ModalStack";
import Navbar from "../components/page/Navbar";
import Intro from "../components/intro/Intro";
import Footer from "../components/page/Footer";
import Banner from "../components/page/Banner";
import { gsap } from "gsap";
const defaultChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?~';
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { useEffect } from "react";

gsap.registerPlugin(ScrambleTextPlugin);

function Wireframe() {
  const loading = false;
  useEffect(() => {
    const links = document.querySelectorAll('.scramble');
    console.log(links);
    const scramble = (event: any) => {
      const target = event.target.firstElementChild || event.target;
      if (!gsap.isTweening(target)) {
        gsap.to(target, {
          duration: .8,
          ease: 'sine.in',
          scrambleText: {
            text: target.title,
            speed: 2,
            chars: true ? defaultChars : target.innerText.replace(/\s/g, '')
          }
        });
      }
    }
    for (const link of links) {
      scramble({ target: link });
    }
  }, []);


  return (
    <DefaultLayout previewPixelSRC="https://intdev-global.s3.us-west-2.amazonaws.com/template-app-icon.png">
      <DebugGrid />
      <ModalStack />
      {loading ? <Loader /> :
        <Row
          style={{
            display: "flex",
            width: "100%",
            backgroundColor: "var(--color-background)",
            justifyContent: "space-between",
            flexDirection: 'column',
            borderRadius: '0px',
            overflow: 'hidden',
            overflowY: 'auto',
          }}>
          <Intro />
          <Banner />
          <Navbar />
          <Outlet />
          <Footer />
        </Row>
      }
    </DefaultLayout >
  );
}

export default Wireframe;


