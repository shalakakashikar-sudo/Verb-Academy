
import React, { useState, useEffect } from 'react';
import { Lesson, VerbForm } from '../types';
import { VERBS } from '../constants';
import VerbTable from './VerbTable';

interface LessonViewProps {
  lesson: Lesson;
  onStartQuiz: () => void;
}

const LessonView: React.FC<LessonViewProps> = ({ lesson, onStartQuiz }) => {
  const [matchingStep, setMatchingStep] = useState(0);
  const [matchingInput, setMatchingInput] = useState('');
  const [showMatchFeedback, setShowMatchFeedback] = useState<'correct' | 'wrong' | null>(null);

  // Simple mini-game logic
  const currentMatchingVerb = lesson.verbs[matchingStep % lesson.verbs.length];
  const formsCycle = [VerbForm.V2, VerbForm.V3, VerbForm.ING_FORM];
  const targetForm = formsCycle[matchingStep % formsCycle.length];
  
  const getTargetFormValue = () => {
    const v = VERBS[currentMatchingVerb];
    if (targetForm === VerbForm.V2) return v.v2;
    if (targetForm === VerbForm.V3) return v.v3;
    return v.ing;
  };

  const handleMatchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (matchingInput.toLowerCase().trim() === getTargetFormValue().toLowerCase()) {
      setShowMatchFeedback('correct');
      setTimeout(() => {
        setMatchingStep(prev => prev + 1);
        setMatchingInput('');
        setShowMatchFeedback(null);
      }, 1000);
    } else {
      setShowMatchFeedback('wrong');
      setTimeout(() => setShowMatchFeedback(null), 1000);
    }
  };

  return (
    <div className="space-y-12 animate-fadeIn max-w-none">
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-cinzel text-amber-400 mb-3">{lesson.title}</h2>
        <p className="text-indigo-200 italic text-xl">{lesson.description}</p>
      </div>

      <div className="bg-slate-900/40 rounded-3xl p-8 border border-amber-500/20 shadow-inner">
        <div className="space-y-6">
          {lesson.content.map((text, idx) => (
            <p key={idx} className="text-xl leading-relaxed text-slate-100 font-light">{text}</p>
          ))}
        </div>
      </div>

      {/* Mini Quiz: Magic Matching */}
      <div className="bg-amber-900/10 rounded-3xl p-8 border-2 border-dashed border-amber-500/30 transition-all hover:border-amber-500/50">
        <h3 className="text-2xl font-cinzel text-amber-300 mb-6 flex items-center gap-3">
          <span className="text-3xl">✨</span> 
          <span>Magic Matching Practice</span>
        </h3>
        <p className="text-sm text-amber-200/80 mb-6 uppercase tracking-[0.2em] font-bold">
          Quick Training: Type the <span className="text-amber-400 underline decoration-amber-500/50 underline-offset-4">{targetForm === VerbForm.V2 ? 'V2' : targetForm === VerbForm.V3 ? 'V3' : '(-ing)'}</span> form of:
        </p>
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="text-4xl font-bold text-white bg-amber-500/20 px-10 py-4 rounded-2xl border border-amber-500 shadow-lg min-w-[200px] text-center">
            {currentMatchingVerb.toUpperCase()}
          </div>
          <form onSubmit={handleMatchSubmit} className="flex-1 w-full flex gap-3 h-16">
            <input 
              type="text"
              value={matchingInput}
              onChange={(e) => setMatchingInput(e.target.value)}
              placeholder="Type form here..."
              className={`flex-1 bg-indigo-950/50 border-2 rounded-2xl px-6 py-2 text-xl outline-none transition-all
                ${showMatchFeedback === 'correct' ? 'border-green-500 bg-green-900/30' : 
                  showMatchFeedback === 'wrong' ? 'border-red-500 animate-shake' : 'border-amber-500/50 focus:border-amber-400'}`}
            />
            <button className="px-8 py-2 bg-amber-500 text-indigo-950 font-black rounded-2xl hover:bg-amber-400 transition-all hover:scale-105 active:scale-95 shadow-lg">
              MATCH!
            </button>
          </form>
        </div>
      </div>

      <div className="space-y-6">
        <h3 className="text-2xl font-cinzel text-amber-300 flex items-center gap-3">
          <span className="text-3xl">📜</span>
          <span>Ancient Verb Scroll</span>
        </h3>
        <VerbTable verbBases={lesson.verbs} />
      </div>

      <button
        onClick={onStartQuiz}
        className="w-full py-6 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-indigo-950 font-black text-2xl rounded-[2rem] shadow-[0_15px_30px_rgba(251,191,36,0.3)] transform transition-all hover:-translate-y-2 active:scale-95 flex items-center justify-center gap-4"
      >
        <span>ENTER THE TRIALS</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default LessonView;
