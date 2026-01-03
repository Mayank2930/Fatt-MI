import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import MarketsPage from './pages/MarketsPage';
import AboutPage from './pages/AboutPage';
import PricingPage from './pages/PricingPage';

function App() {
  const [isProMode, setIsProMode] = useState(false);

  return (
    <Router>
      <div className="bg-brand-dark min-h-screen relative overflow-x-hidden selection:bg-brand-accent selection:text-white">
        {/* Ambient Background Lighting */}
        <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[120px] rounded-full animate-pulse-slow"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/10 blur-[120px] rounded-full animate-float"></div>
        </div>

        <Navbar isProMode={isProMode} setIsProMode={setIsProMode} />

        <Routes>
          <Route path="/" element={<HomePage isProMode={isProMode} />} />
          <Route path="/markets" element={<MarketsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/pricing" element={<PricingPage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
