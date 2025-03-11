import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/views/Home';
import NotFound from './components/views/NotFound';

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
