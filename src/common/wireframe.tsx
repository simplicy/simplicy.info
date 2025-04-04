import { Outlet } from "react-router-dom";
import Loader from "../components/Loader";
import DebugGrid from "../sacred/DebugGrid";
import DefaultLayout from "../sacred/page/DefaultLayout";
import Row from "../sacred/Row";
import ModalStack from "../sacred/ModalStack";
import Navbar from "../components/page/Navbar";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { useContext } from "../components/page/Context";
function Wireframe() {
  const loading = false;
  const { isAuthenticated } = useAuth0();
  const { handleLogout } = useContext() as {
    handleLogout: () => void;
  }
  useEffect(() => {
    if (isAuthenticated && !window.location.pathname.includes('admin')) {
      handleLogout();
    }

  }, []);
  return (
    <DefaultLayout previewPixelSRC="https://intdev-global.s3.us-west-2.amazonaws.com/template-app-icon.png">
      <DebugGrid />
      <ModalStack />
      {/* if not logged in (Authenticated with Auth0 but not with closyt server) or loading - show loader */}
      {loading ? <Loader /> :
        <Row
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
            marginLeft: "var(--sidebar-margins)",
            marginRight: "var(--sidebar-margins)",
            flexDirection: 'column',
            borderRadius: '0px',
            overflow: 'hidden',
            overflowY: 'hidden',
          }}>
          <Navbar />
          <Outlet />
        </Row>
      }
    </DefaultLayout>
  );
}

export default Wireframe;

