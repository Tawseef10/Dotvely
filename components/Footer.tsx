import React from 'react';
import { Rocket, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 border-b border-slate-800 pb-12">
          
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6 text-white">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <Rocket size={18} />
              </div>
              <span className="font-bold text-xl tracking-tight">Dotvely</span>
            </div>
            <p className="max-w-xs text-slate-400 mb-6">
              Crafting futuristic digital experiences for local businesses in New Delhi and beyond.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li>Pul Pehlad Pur, New Delhi, India</li>
              <li>
                 <a href="tel:8527960872" className="hover:text-indigo-400 transition-colors">
                  +91 8527960872
                </a>
              </li>
              <li>
                <a href="mailto:DotvelyTY@gmail.com" className="hover:text-indigo-400 transition-colors">
                  DotvelyTY@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Founders</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a href="tel:8527960872" className="flex items-center gap-2 hover:text-indigo-400 transition-colors group">
                  <span className="w-2 h-2 rounded-full bg-indigo-500 group-hover:scale-125 transition-transform"></span>
                  Tawseef Ahmad Shaikh
                </a>
              </li>
              <li>
                 <a href="tel:9653057438" className="flex items-center gap-2 hover:text-indigo-400 transition-colors group">
                  <span className="w-2 h-2 rounded-full bg-purple-500 group-hover:scale-125 transition-transform"></span>
                  Yogesh Shakya
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} Dotvely. All rights reserved.{" "}
            <a
              href="tel:8527960872"
              className="text-indigo-400 hover:text-indigo-300 font-medium transition-colors"
            >
              Made by - Tawseef Ahmad Shaikh
            </a>
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;