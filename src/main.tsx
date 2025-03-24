import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ToastContainer } from 'react-toastify';
import { BrowserRouter } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion';
import 'react-toastify/dist/ReactToastify.css';
import './global.scss';
import Providers from './components/Providers.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ToastContainer />
    <BrowserRouter>
      <AnimatePresence>
        <Providers>
          <App />
        </Providers>
      </AnimatePresence>
    </BrowserRouter>
  </StrictMode >
)
