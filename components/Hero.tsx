
import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onStart: () => void;
  onViewPlan: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStart, onViewPlan }) => {
  return (
    <section className="pt-40 pb-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold text-blue-700 bg-blue-50 rounded-full">
          체계적인 성경 읽기의 시작
        </span>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight text-gray-900 leading-tight">
          코디엠과 함께하는 <br/>
          <span className="text-blue-700 text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500">
            깊이 있는 성경통독
          </span>
        </h1>
        <p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed">
          매일의 인공지능 가이드를 통해 말씀을 더 깊이 이해하고, 
          성경 전체를 아우르는 통찰력을 기르세요.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button 
            onClick={onStart}
            className="group bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-blue-800 transition-all transform hover:-translate-y-1 flex items-center justify-center"
          >
            오늘의 통독 시작하기
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition" />
          </button>
          <button 
            onClick={onViewPlan}
            className="border border-gray-200 bg-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-gray-50 transition"
          >
            통독 계획표 보기
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
