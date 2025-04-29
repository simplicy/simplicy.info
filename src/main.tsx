import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ToastContainer } from 'react-toastify';
import { BrowserRouter } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion';
import 'react-toastify/dist/ReactToastify.css';
import './common/style/global.scss';
import Providers from './components/page/Providers.tsx';
import { Auth0ProviderWithNavigate } from './common/auth0.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ToastContainer />
    <BrowserRouter>
      <AnimatePresence>
        <Auth0ProviderWithNavigate>
          <Providers>
            <App />
          </Providers>
        </Auth0ProviderWithNavigate>
      </AnimatePresence>
    </BrowserRouter>
  </StrictMode >
)
