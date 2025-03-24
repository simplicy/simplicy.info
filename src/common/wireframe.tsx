import { Outlet } from "react-router-dom";
import Loader from "../components/Loader";
import DebugGrid from "../sacred/DebugGrid";
import DefaultLayout from "../sacred/page/DefaultLayout";
import Row from "../sacred/Row";
import ModalStack from "../sacred/ModalStack";
import Navbar from "../components/page/Navbar";
function Wireframe() {
  let loading = false;
  return (
    <DefaultLayout previewPixelSRC="https://intdev-global.s3.us-west-2.amazonaws.com/template-app-icon.png">
      <DebugGrid />
      <ModalStack />
      {/* if not logged in (Authenticated with Auth0 but not with closyt server) or loading - show loader */}
      {loading ? <Loader /> :
        <Row
          style={{
            display: "flex",
            width: '100%',
            padding: "3ch 0 1ch 0",
            marginLeft: "var(--sidebar-margins)",
            marginRight: "var(--sidebar-margins)",
            flexDirection: 'column',
            borderRadius: '0px',
            overflow: 'hidden',
            overflowY: 'hidden',
          }}>
          <Navbar />
          {/* <motion.div */}
          {/*   layoutId="outlet" */}
          {/*   style={{ */}
          {/*     height: "100%", */}
          {/*     minWidth: "100%", */}
          {/*     width: "100%", */}
          {/*   }} */}
          {/*   initial={{ */}
          {/*     opacity: 0.4 */}
          {/*   }} */}
          {/*   animate={{ opacity: 1 }} */}
          {/*   exit={{ opacity: 0.4 }} */}
          {/*   transition={{ duration: 1 }} */}
          {/* > */}
          <Outlet />
          {/* </motion.div> */}
        </Row>
      }
    </DefaultLayout>
  );
}

export default Wireframe;

