import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ToastContainer } from 'react-toastify';
import { BrowserRouter } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion';
import 'react-toastify/dist/ReactToastify.css';
import './global.scss';
import './global.css';
import Providers from './components/page/Providers.tsx';
import { Flip } from 'react-toastify';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={true}
      closeOnClick={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      transition={Flip}
    />
    <BrowserRouter>
      <AnimatePresence>
        <Providers>
          <App />
        </Providers>
      </AnimatePresence>
    </BrowserRouter>
  </StrictMode >
)
