
import Home from './pages/Home'
import Error from './pages/Error.tsx'
import Wireframe from './common/wireframe'
import { Routes, Route, useLocation } from 'react-router-dom'
function App() {
  let location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Wireframe />}>
        {/* Homepage/Component set here in index */}
        <Route index element={<Home />} />
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

