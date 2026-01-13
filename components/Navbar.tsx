
import React from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onNavClick: (view: 'home' | 'guides' | 'chat') => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavClick }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div 
          className="text-2xl font-bold text-blue-800 tracking-tighter cursor-pointer"
          onClick={() => onNavClick('home')}
        >
          KODIAM <span className="font-light text-gray-400">BIBLE</span>
        </div>
        
        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 font-medium text-gray-600">
          <button onClick={() => onNavClick('guides')} className="hover:text-blue-700 transition">성경통독 가이드</button>
          <button onClick={() => onNavClick('home')} className="hover:text-blue-700 transition">오늘의 말씀</button>
          <button onClick={() => onNavClick('chat')} className="hover:text-blue-700 transition">성경 질문하기</button>
        </div>

        <div className="flex items-center space-x-4">
          <button className="hidden md:block bg-blue-700 text-white px-5 py-2 rounded-full font-medium hover:bg-blue-800 transition shadow-lg shadow-blue-200">
            시작하기
          </button>
          <button 
            className="md:hidden p-2 text-gray-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 px-6 py-4 space-y-4">
          <button onClick={() => { onNavClick('guides'); setIsOpen(false); }} className="block w-full text-left font-medium text-gray-600">성경통독 가이드</button>
          <button onClick={() => { onNavClick('home'); setIsOpen(false); }} className="block w-full text-left font-medium text-gray-600">오늘의 말씀</button>
          <button onClick={() => { onNavClick('chat'); setIsOpen(false); }} className="block w-full text-left font-medium text-gray-600">성경 질문하기</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
