import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/views/Home';
import NotFound from './components/views/NotFound';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </Router>
  )
}
