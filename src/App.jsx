import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import RegisterModal from './components/RegisterModal';
import Home from './pages/Home';
import ProjectsPage from './pages/ProjectsPage';
//import LeaderboardPage from './pages/LeaderboardPage';

export default function App() {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar onOpenRegister={() => setIsRegisterOpen(true)} />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home onOpenRegister={() => setIsRegisterOpen(true)} />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/leaderboard" element={<LeaderboardPage />} />
          </Routes>
        </main>
        <Footer />
        <RegisterModal isOpen={isRegisterOpen} onClose={() => setIsRegisterOpen(false)} />
      </div>
    </Router>
  );
}

