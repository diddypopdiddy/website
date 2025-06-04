import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="flex flex-col items-center py-4 border-b border-white/20 bg-blue-900 text-white">
      <div className="flex justify-between w-full max-w-7xl px-4">
        <div className="flex items-center space-x-2">
          <img src="/mnt/data/kingsway logo.png" alt="Kingsway logo" className="h-10 rounded-full" />
          <span className="text-lg font-semibold">Kingsway Regional High School AI Playbook</span>
        </div>
        <div className="space-x-4 hidden md:flex">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/foundations" className="hover:underline">AI Foundations</Link>
          <Link to="/integration" className="hover:underline">Classroom Integration</Link>
          <Link to="/prompting" className="hover:underline">Prompt Engineering</Link>
          <Link to="/subjects" className="hover:underline">Subject Strategies</Link>
          <Link to="/integrity" className="hover:underline">Academic Integrity</Link>
          <Link to="/resources" className="hover:underline">Resources</Link>
        </div>
      </div>
    </header>
  );
}