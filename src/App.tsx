
import Home from './pages/Home'
import Error from './pages/Error.tsx'
import Wireframe from './common/wireframe'
import { Routes, Route, useLocation } from 'react-router-dom'
import Links from './pages/Links.tsx';
import Portfolio from './pages/Portfolio.tsx';
import Work from './pages/Work.tsx';
import Bio from './pages/Bio.tsx';
import Contact from './pages/Contact.tsx';



function App() {
  let location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Wireframe />}>
        {/* Homepage/Component set here in index */}
        <Route index element={<Home />} />
        <Route path="links" element={<Links />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="work" element={<Work />} />
        <Route path="contact-me" element={<Contact />} />
        <Route path="bio" element={<Bio />} />
        <Route path="error" element={<Error />} />
        {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>

  )
}

export default App

