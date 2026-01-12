
import React, { useState, useEffect } from 'react';
import HedgehogMascot, { HEDGEHOG_PHRASES } from './components/HedgehogMascot';
import LessonView from './components/LessonView';
import QuizView from './components/QuizView';
import { LESSONS } from './constants';
import { Lesson, MascotMood } from './types';

const App: React.FC = () => {
  const [currentLesson, setCurrentLesson] = useState<Lesson | null>(null);
  const [view, setView] = useState<'selection' | 'lesson' | 'quiz'>('selection');
  const [mascotMood, setMascotMood] = useState<MascotMood>('idle');
  const [mascotMessage, setMascotMessage] = useState<string>('');

  useEffect(() => {
    const msg = HEDGEHOG_PHRASES.welcome[Math.floor(Math.random() * HEDGEHOG_PHRASES.welcome.length)];
    setMascotMessage(msg);
  }, []);

  const handleSelectLesson = (lesson: Lesson) => {
    setCurrentLesson(lesson);
    setView('lesson');
    setMascotMood('happy');
    setMascotMessage(`Ah, ${lesson.title}! A sparkling jewel in the Treasury.`);
  };

  const handleStartQuiz = () => {
    setView('quiz');
    setMascotMood('thinking');
    setMascotMessage("Quiet now... focus your mind on the shifting forms.");
  };

  const handleQuizComplete = () => {
    setView('selection');
    setCurrentLesson(null);
    setMascotMood('idle');
    setMascotMessage("Excellent progress! Which golden scroll is next?");
  };

  const handleMascotUpdate = (mood: MascotMood, message: string) => {
    setMascotMood(mood);
    setMascotMessage(message);
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden pb-24 px-4 sm:px-6 pt-12 flex flex-col items-center relative">
      <header className="w-full max-w-5xl flex flex-col items-center mb-16 relative z-10">
        <h1 className="text-4xl md:text-7xl font-cinzel text-amber-400 drop-shadow-[0_5px_15px_rgba(251,191,36,0.4)] mb-4 text-center tracking-tighter uppercase">
          Verb Academy
        </h1>
        <p className="text-slate-300 text-center max-w-2xl text-base md:text-xl font-medium leading-relaxed px-4">
          Master the ancient treasures of language with your guardian Hedgie.
        </p>
      </header>

      <main className="w-full max-w-5xl glass-panel rounded-[2rem] md:rounded-[3rem] p-5 md:p-12 shadow-2xl relative transition-all duration-500 z-10">
        {/* Desktop Mascot Positioning */}
        <div className="absolute -top-24 -right-12 z-20 hidden xl:block scale-110">
          <HedgehogMascot mood={mascotMood} externalMessage={mascotMessage} />
        </div>
        
        {/* Mobile/Tablet Mascot Positioning */}
        <div className="xl:hidden mb-8 md:mb-12 flex justify-center w-full">
          <div className="scale-90 sm:scale-100">
            <HedgehogMascot mood={mascotMood} externalMessage={mascotMessage} />
          </div>
        </div>

        {view === 'selection' && (
          <div className="space-y-8 animate-fadeIn">
            <h2 className="text-2xl md:text-3xl font-cinzel text-amber-300 border-b-2 border-amber-500/20 pb-4 mb-6">Imperial Scrolls</h2>
            <div className="flex flex-col gap-6 max-w-3xl mx-auto">
              {LESSONS.map((lesson) => (
                <button
                  key={lesson.id}
                  onClick={() => handleSelectLesson(lesson)}
                  className="group relative flex items-center p-6 md:p-8 bg-slate-900/40 hover:bg-amber-500/5 border border-white/10 hover:border-amber-400 rounded-3xl transition-all duration-300 text-left shadow-lg hover:shadow-amber-400/10 w-full overflow-hidden"
                >
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl md:text-2xl font-bold text-amber-400 group-hover:text-amber-300 transition-colors truncate">
                      {lesson.title}
                    </h3>
                    <p className="text-slate-400 text-sm md:text-base mt-2 font-medium leading-relaxed">
                      {lesson.description}
                    </p>
                  </div>
                  <div className="ml-4 transform group-hover:scale-125 transition-transform duration-300 shrink-0">
                    <span className="text-3xl md:text-4xl filter drop-shadow-md">📜</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {view === 'lesson' && currentLesson && (
          <div className="animate-fadeIn">
            <button 
              onClick={() => setView('selection')}
              className="group text-amber-400 hover:text-amber-300 flex items-center gap-2 mb-8 text-xs md:text-sm font-bold uppercase tracking-widest transition-all"
            >
              <span className="group-hover:-translate-x-1 transition-transform">←</span> Return to Archives
            </button>
            <LessonView 
              lesson={currentLesson} 
              onStartQuiz={handleStartQuiz} 
            />
          </div>
        )}

        {view === 'quiz' && currentLesson && (
          <div className="animate-fadeIn">
             <button 
              onClick={() => setView('lesson')}
              className="group text-amber-400 hover:text-amber-300 flex items-center gap-2 mb-8 text-xs md:text-sm font-bold uppercase tracking-widest transition-all"
            >
              <span className="group-hover:-translate-x-1 transition-transform">←</span> Consult Scroll
            </button>
            <h2 className="text-3xl md:text-4xl font-cinzel text-amber-400 mb-10 text-center tracking-tight">Trial of the 20 Orbs</h2>
            <QuizView 
              questions={currentLesson.quiz} 
              onComplete={handleQuizComplete}
              onMascotUpdate={handleMascotUpdate}
            />
          </div>
        )}
      </main>

      {/* Decorative Oasis Elements */}
      <div className="fixed bottom-0 left-0 right-0 w-full pointer-events-none opacity-20 z-0">
        <svg viewBox="0 0 1440 320" className="w-full h-auto preserve-3d" preserveAspectRatio="none">
          <path fill="#fbbf24" d="M0,192L60,192C120,192,240,192,360,165.3C480,139,600,85,720,80C840,75,960,117,1080,149.3C1200,181,1320,203,1380,213.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default App;
