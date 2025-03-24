import * as React from 'react';
import Cookies from "js-cookie";
import { useNavigate } from 'react-router-dom';
import { fonts, themes } from '../../common/vars';
import { toggleDebugGrid } from '../../sacred/DebugGrid';
import { useEffect } from 'react';

interface ContextType {
  themes: any;
  fonts: any;
}

const Context = React.createContext<ContextType | null>(null);

export const Provider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const navigate = useNavigate();
  if (Cookies.get("theme")) {
    let index = themes.findIndex((theme) => theme.children === Cookies.get("theme"));
    themes[index].onClick();
  }
  if (Cookies.get("font")) {
    let index = fonts.findIndex((font) => font.children === Cookies.get("font"));
    fonts[index].onClick();
  }
  if (!Cookies.get('grid')) {
    Cookies.set('grid', 'false', { expires: 365 })
  }
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
      fonts,
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

