declare const window: any;
import Home from './pages/Home'
import Error from './pages/Error.tsx'
import Wireframe from './common/wireframe'
import { Routes, Route, useLocation } from 'react-router-dom'
import Work from './pages/Work.tsx';
import Bio from './pages/Bio.tsx';
import Contact from './pages/ContactMe.tsx';
import Support from './pages/Support.tsx';
import { useEffect } from 'react';
import BookForm from './components/Book.tsx';
import ContactForm from './components/Contact.tsx';

function App() {
  useEffect(() => {
    var _mtm = window._mtm = window._mtm || [];
    _mtm.push({ 'mtm.startTime': (new Date().getTime()), 'event': 'mtm.Start' });
    (function() {
      var d = document, g = d.createElement('script'), s = d.getElementsByTagName('script')[0];
      g.async = true; g.src = 'https://analytics.sympil.com/js/container_YUiMa9yU.js'; s.parentNode?.insertBefore(g, s);
    })();
  }, []);
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
        <Route path="book" element={<BookForm />} />
        <Route path="message" element={<ContactForm />} />
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

