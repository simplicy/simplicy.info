
import Home from './pages/Home'
import Error from './pages/Error.tsx'
import Wireframe from './common/wireframe'
import { Routes, Route, useLocation } from 'react-router-dom'
import Work from './pages/Work.tsx';
import Bio from './pages/Bio.tsx';
import Contact from './pages/Contact.tsx';
import Admin from './pages/Admin.tsx';
import Support from './pages/Support.tsx';

function App() {
  // If in dev mode do this
  let location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Wireframe />}>
        {/* Homepage/Component set here in index */}
        <Route index element={<Home />} />
        {/* <Route path="portfolio" element={<Portfolio />} /> */}
        <Route path="support" element={<Support />} />
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

