
import React from 'react';
import { Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <div className="text-2xl font-bold text-white mb-6">KODIAM <span className="text-blue-500">BIBLE</span></div>
          <p className="max-w-sm mb-6 leading-relaxed">
            성경 통독의 여정을 돕는 전문적인 가이드를 제공합니다. 
            말씀의 깊이를 경험하는 매일의 습관을 만들어보세요.
          </p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6">바로가기</h4>
          <ul className="space-y-4 text-sm">
            <li><a href="#" className="hover:text-white transition">통독 가이드</a></li>
            <li><a href="#" className="hover:text-white transition">오늘의 말씀</a></li>
            <li><a href="#" className="hover:text-white transition">커뮤니티</a></li>
            <li><a href="#" className="hover:text-white transition">개인정보처리방침</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6">팔로우</h4>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white transition">
                <Instagram className="w-6 h-6" />
            </a>
            <div className="w-6 h-6 bg-gray-700 rounded-full"></div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-800 text-sm text-center">
        © 2024 Kodiam Bible. 모든 권리 보유.
      </div>
    </footer>
  );
};

export default Footer;
