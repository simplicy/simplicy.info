import { Outlet } from "react-router-dom";
import Loader from "../components/page/Loader";
import DebugGrid from "../sacred/DebugGrid";
import DefaultLayout from "../sacred/page/DefaultLayout";
import Row from "../sacred/Row";
import ModalStack from "../sacred/ModalStack";
import Navbar from "../components/page/Navbar";
import { useEffect } from "react";
import { useContext } from "../components/page/Context";
import Intro from "../components/intro/Intro";
import Footer from "../components/page/Footer";
// import background from "./shaders/background.glsl?raw";
// import test from "./shaders/test.glsl?raw";
// import fragment from "./shaders/fragment.glsl?raw";
function Wireframe() {
  const loading = false;

  return (
    <DefaultLayout previewPixelSRC="https://intdev-global.s3.us-west-2.amazonaws.com/template-app-icon.png">
      <DebugGrid />
      <ModalStack />
      {/* <canvas className='glslCanvas' data-fragment={background} id="canvas" */}
      {/*   width={window.innerWidth} height={window.innerHeight} */}
      {/* /> */}
      {loading ? <Loader /> :
        <Row
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
            marginInline: "var(--sidebar-margins)",
            flexDirection: 'column',
            borderRadius: '0px',
            overflow: 'hidden',
            overflowY: 'hidden',
          }}>
          <Intro />
          <Navbar />
          <Outlet />
          <Footer />
        </Row>
      }
    </DefaultLayout>
  );
}

export default Wireframe;


