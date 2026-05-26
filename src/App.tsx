import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import BackgroundFX from './components/BackgroundFX';
import Home from './pages/Home';
import CV from './pages/CV';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-bg text-white noise">
      <BackgroundFX />
      <ScrollProgress />
      <Navbar />
      <main className="relative z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cv" element={<CV />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
