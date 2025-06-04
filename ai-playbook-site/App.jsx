import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import FoundationsPage from './pages/FoundationsPage';
import IntegrationPage from './pages/IntegrationPage';
import PromptingPage from './pages/PromptingPage';
import SubjectsPage from './pages/SubjectsPage';
import IntegrityPage from './pages/IntegrityPage';
import ResourcesPage from './pages/ResourcesPage';

export default function App() {
  return (
    <Router>
      <div className="bg-blue-900 min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow bg-white">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/foundations" element={<FoundationsPage />} />
            <Route path="/integration" element={<IntegrationPage />} />
            <Route path="/prompting" element={<PromptingPage />} />
            <Route path="/subjects" element={<SubjectsPage />} />
            <Route path="/integrity" element={<IntegrityPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}