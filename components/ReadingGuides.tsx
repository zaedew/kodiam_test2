
import React, { useState } from 'react';
import { ArrowRight, BookOpen, Loader2, X } from 'lucide-react';
import { generateStudyGuide } from '../services/geminiService';
import { ReadingGuide } from '../types';

const INITIAL_GUIDES: ReadingGuide[] = [
  { 
    id: '1',
    title: '창세기 1장: 창조의 서막', 
    category: '구약통독', 
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&q=80',
    description: '태초에 하나님이 천지를 창조하시니라. 모든 존재의 시작을 묵상합니다.'
  },
  { 
    id: '2',
    title: '마태복음: 왕의 오심', 
    category: '신약통독', 
    image: 'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=800&q=80',
    description: '약속된 메시아의 탄생과 사역을 통해 하나님의 나라를 발견하세요.'
  },
  { 
    id: '3',
    title: '출애굽기: 해방의 역사', 
    category: '구약통독', 
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80',
    description: '종 되었던 땅에서 이끄시는 하나님의 강한 손과 편 팔을 경험합니다.'
  }
];

const ReadingGuides: React.FC = () => {
  const [selectedGuide, setSelectedGuide] = useState<ReadingGuide | null>(null);
  const [aiInsight, setAiInsight] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleOpenGuide = async (guide: ReadingGuide) => {
    setSelectedGuide(guide);
    setLoading(true);
    setAiInsight(null);
    const insight = await generateStudyGuide(guide.title);
    setAiInsight(insight);
    setLoading(false);
  };

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 className="text-3xl font-bold mb-2">최신 통독 가이드</h2>
          <p className="text-gray-500">코디엠 성경통독에서 제공하는 전문적인 AI 기반 가이드</p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {INITIAL_GUIDES.map((item) => (
          <div 
            key={item.id} 
            className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            onClick={() => handleOpenGuide(item)}
          >
            <div className="relative h-64 overflow-hidden">
              <img src={item.image} alt={item.title} className="w-full h-full object-cover transition duration-500 group-hover:scale-110" />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-md text-xs font-bold text-blue-800">
                {item.category}
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 group-hover:text-blue-700 transition">{item.title}</h3>
              <p className="text-gray-500 text-sm line-clamp-2 mb-4">{item.description}</p>
              <div className="flex items-center text-blue-700 font-semibold text-sm">
                가이드 읽기 <ArrowRight className="ml-1 w-4 h-4" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal / Detailed View */}
      {selectedGuide && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-6 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative shadow-2xl">
            <button 
              onClick={() => setSelectedGuide(null)}
              className="absolute top-6 right-6 p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition"
            >
              <X size={24} />
            </button>
            
            <div className="h-64 sm:h-80 w-full relative">
              <img src={selectedGuide.image} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
              <div className="absolute bottom-8 left-8">
                <span className="px-3 py-1 bg-blue-700 text-white text-xs font-bold rounded-full mb-3 inline-block">
                  {selectedGuide.category}
                </span>
                <h2 className="text-4xl font-extrabold text-gray-900">{selectedGuide.title}</h2>
              </div>
            </div>

            <div className="p-8 sm:p-12">
              <div className="flex items-center space-x-3 mb-8 text-blue-700 bg-blue-50 p-4 rounded-2xl border border-blue-100">
                <BookOpen />
                <span className="font-bold">AI 성경 통찰 가이드</span>
              </div>

              {loading ? (
                <div className="flex flex-col items-center justify-center py-20 space-y-4">
                  <Loader2 className="animate-spin text-blue-700" size={40} />
                  <p className="text-gray-500 font-medium italic">성경의 깊은 지혜를 찾고 있습니다...</p>
                </div>
              ) : (
                <div className="prose prose-blue max-w-none text-gray-700 leading-relaxed whitespace-pre-wrap font-serif text-lg">
                  {aiInsight}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ReadingGuides;
