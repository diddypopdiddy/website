import React from 'react';
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-center text-white text-sm py-6">
      <div className="flex justify-center space-x-4 mb-2">
        <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/733/733635.png" alt="X" className="h-5" /></a>
        <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" className="h-5" /></a>
        <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="YouTube" className="h-5" /></a>
        <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/1384/1384031.png" alt="Instagram" className="h-5" /></a>
      </div>
      <Button variant="secondary" className="bg-red-700 hover:bg-red-800 text-white px-6 py-2">Support Kingsway</Button>
      <div className="mt-4">
        ©2025 Kingsway Regional High School | <a href="#" className="hover:underline">AI Playbook</a> | <a href="#" className="hover:underline">Privacy Policy</a> | <a href="#" className="hover:underline">Accessibility</a>
      </div>
    </footer>
  );
}