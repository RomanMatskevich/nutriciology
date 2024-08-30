import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './pages/main'
import GiftSuccess from './pages/giftSuccess';
import Service from './pages/service';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/gift-success" element={<GiftSuccess />} />
        <Route path="/services/:id" element={<Service />} />
      </Routes>
    </Router>
  );
}

export default App;