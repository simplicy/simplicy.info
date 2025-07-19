import * as React from 'react';
import Cookies from "js-cookie";
import { useNavigate } from 'react-router-dom';
import { fonts, themes } from '../../common/vars';
import { toggleDebugGrid } from '../../sacred/DebugGrid';
import { useEffect } from 'react';
import * as Utilities from '../../common/utilities';
import { useAuth0 } from '@auth0/auth0-react';
import { closytUserFmc } from '../../common/models';
import { useClosytAuth } from '../../common/hooks';

interface ContextType {
  themes: any;
  fonts: any;
  currentMonth: number;
  delay: number;
  handleLogout?: () => void;
  refetchClosytAuth: () => void;
  isClosytAuthenticated: boolean;
  isAuthError: boolean;
  isAuthFetching: boolean;
}

const Context = React.createContext<ContextType | null>(null);

export const Provider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  let currentMonth = new Date().getMonth();
  let delay = currentMonth + 5;
  if (Cookies.get("intro")) {
    delay = 0;
  }
  // Override to disable intro animation
  delay = 0;
  const { logout, getAccessTokenSilently, user, isAuthenticated } = useAuth0();
  const handleLogout = async () => {
    let token = await getAccessTokenSilently();
    await closytUserFmc.logout(token).then(() => {
      Cookies.remove('loggedin');
      Cookies.remove('auth');
      // if not home navigate to home
      if (window.location.pathname !== '/') {
        navigate('/');
      }
      logout({
        logoutParams: {
          returnTo: window.location.origin,
        },
      });
    });
  };
  const preFetch = () => {
    return;

  }

  const {
    data: isClosytAuthenticated,
    refetch: refetchClosytAuth,
    isError: isAuthError,
    isFetching: isAuthFetching,
  } = useClosytAuth(isAuthenticated, user, handleLogout, preFetch, getAccessTokenSilently) as {
    data: boolean,
    isError: boolean,
    isFetching: boolean,
    refetch: () => void,
  };

  if (isAuthenticated && !isClosytAuthenticated && window.location.pathname.includes('admin')) {
    refetchClosytAuth();
  }

  const navigate = useNavigate();
  // Set theme if set
  if (Cookies.get("theme")) {
    let index = themes.findIndex((theme) => theme.children === Cookies.get("theme"));
    themes[index].onClick();
  }
  else {
    Cookies.set('theme', 'Black Midnight Vapor', { expires: 365 })
    Utilities.onHandleThemeChange('theme-dark')
  }
  // Set font if set
  if (Cookies.get("font")) {
    let index = fonts.findIndex((font) => font.children === Cookies.get("font"));
    fonts[index].onClick();
  }
  // Set grid if set
  if (!Cookies.get('grid')) {
    Cookies.set('grid', 'false', { expires: 365 })
  }
  // Grid toggle
  const [grid, setGrid] = React.useState(false);

  useEffect(() => {
    if (Cookies.get("grid") && grid !== (Cookies.get("grid") === "true")) {
      setGrid(Cookies.get("grid") === "true");
      toggleDebugGrid();
    }
  }, [navigate]);

  return (
    <Context.Provider value={{
      themes,
      refetchClosytAuth,
      isClosytAuthenticated,
      isAuthError,
      isAuthFetching,
      handleLogout,
      fonts,
      currentMonth,
      delay
    }}>
      {children}
    </Context.Provider>
  );
};
export const useContext = (): ContextType => {
  const context = React.useContext(Context);
  if (!context) {
    throw new Error('useContext must be used within a Provider');
  }
  return context;
}

