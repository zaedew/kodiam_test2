
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ReadingGuides from './components/ReadingGuides';
import ChatBot from './components/ChatBot';
import Footer from './components/Footer';
import { Instagram } from 'lucide-react';

type View = 'home' | 'guides' | 'chat';

const App: React.FC = () => {
  const [view, setView] = useState<View>('home');

  const renderContent = () => {
    switch (view) {
      case 'guides':
        return (
          <div className="pt-24">
            <ReadingGuides />
          </div>
        );
      case 'chat':
        return (
          <div className="pt-24 min-h-screen bg-gray-50">
            <ChatBot />
          </div>
        );
      default:
        return (
          <>
            <Hero 
              onStart={() => setView('guides')} 
              onViewPlan={() => setView('guides')} 
            />
            
            {/* Today's Highlight */}
            <section className="py-20 bg-gray-50">
              <div className="max-w-5xl mx-auto px-6 text-center">
                <div className="bg-white p-12 rounded-3xl shadow-xl shadow-blue-100/50 border border-blue-50 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-8 opacity-5 uppercase font-black text-8xl text-blue-900 italic transition group-hover:opacity-10">Verse</div>
                  <p className="text-2xl md:text-3xl font-serif italic text-gray-800 mb-6 leading-snug">
                    "주의 말씀은 내 발에 등이요 내 길에 빛이니이다"
                  </p>
                  <p className="text-blue-700 font-bold uppercase tracking-widest text-sm">시편 119:105</p>
                </div>
              </div>
            </section>

            <ReadingGuides />

            {/* Instagram Feed Section */}
            <section className="py-24 border-t border-gray-100">
              <div className="max-w-7xl mx-auto px-6 text-center">
                <div className="flex justify-center mb-6 text-blue-700">
                  <Instagram className="w-10 h-10" />
                </div>
                <h2 className="text-3xl font-bold mb-4">인스타그램 팔로우</h2>
                <p className="text-gray-500 mb-12">@kodiam_bible 에서 매일의 묵상 카드를 만나보세요.</p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="aspect-square bg-gray-100 hover:opacity-80 transition cursor-pointer overflow-hidden relative group">
                      <div className="w-full h-full bg-blue-50 flex items-center justify-center text-blue-200 italic font-serif">KODIAM</div>
                      <div className="absolute inset-0 bg-blue-700/0 group-hover:bg-blue-700/10 transition-colors" />
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onNavClick={(v) => setView(v)} />
      <main className="flex-grow">
        {renderContent()}
      </main>
      <Footer />
      
      {/* Floating Chat Trigger */}
      {view !== 'chat' && (
        <button 
          onClick={() => setView('chat')}
          className="fixed bottom-8 right-8 z-50 bg-blue-700 text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform active:scale-95 group"
        >
          <div className="relative">
            <span className="absolute -top-10 right-0 bg-white text-blue-700 text-xs font-bold py-1 px-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              무엇이든 물어보세요!
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/></svg>
          </div>
        </button>
      )}
    </div>
  );
};

export default App;
