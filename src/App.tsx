import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/views/Home';
import NotFound from './components/views/NotFound';

// TODO:
// - set up 404/routing
// - set up navbar to handle 404
// - add new bio picture

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}
