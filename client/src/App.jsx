import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Carousel from './pages/Carousel';

function App() {
  return (
    <Router>
      <Routes>
        {/* Default route → show carousel */}
        <Route path="/" element={<Carousel />} />
      </Routes>
    </Router>
  );
}

export default App;
