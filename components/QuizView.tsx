
import React, { useState, useEffect, useCallback } from 'react';
import { QuizQuestion, MascotMood } from '../types';
import { HEDGEHOG_PHRASES } from './HedgehogMascot';

interface QuizViewProps {
  questions: QuizQuestion[];
  onComplete: (score: number) => void;
  onMascotUpdate: (mood: MascotMood, message: string) => void;
}

// Fisher-Yates Shuffle Algorithm
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const QuizView: React.FC<QuizViewProps> = ({ questions, onComplete, onMascotUpdate }) => {
  const [activeQuestions, setActiveQuestions] = useState<QuizQuestion[]>([]);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [results, setResults] = useState<Record<string, boolean>>({});

  const initQuiz = useCallback(() => {
    const shuffled = shuffleArray(questions).slice(0, 20);
    setActiveQuestions(shuffled);
    setAnswers({});
    setSubmitted(false);
    setResults({});
    onMascotUpdate('thinking', "A fresh set of challenges has appeared from the sands!");
  }, [questions, onMascotUpdate]);

  useEffect(() => {
    initQuiz();
  }, [questions]); // Initialize when lesson changes or component mounts

  const handleInputChange = (id: string, value: string) => {
    setAnswers(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = () => {
    const newResults: Record<string, boolean> = {};
    let score = 0;
    
    activeQuestions.forEach(q => {
      const isCorrect = answers[q.id]?.toLowerCase().trim() === q.correctForm.toLowerCase();
      newResults[q.id] = isCorrect;
      if (isCorrect) score++;
    });

    setResults(newResults);
    setSubmitted(true);

    const mood: MascotMood = score === activeQuestions.length ? 'celebrating' : score > (activeQuestions.length / 2) ? 'happy' : 'confused';
    
    const phraseCategory = score === activeQuestions.length ? HEDGEHOG_PHRASES.correct : score > 0 ? HEDGEHOG_PHRASES.correct : HEDGEHOG_PHRASES.incorrect;
    const comment = phraseCategory[Math.floor(Math.random() * phraseCategory.length)];
    
    onMascotUpdate(mood, `${score}/${activeQuestions.length} Correct! ${comment}`);
  };

  return (
    <div className="space-y-10 animate-fadeIn w-full max-w-full overflow-hidden">
      <div className="flex justify-between items-center px-2">
        <span className="text-amber-500 font-cinzel text-sm tracking-widest uppercase">The Trial of 20</span>
        <span className="text-slate-400 font-bold text-sm">{Object.keys(answers).length} / {activeQuestions.length} Answered</span>
      </div>

      <div className="space-y-6 md:space-y-8">
        {activeQuestions.map((q, idx) => (
          <div key={`${q.id}-${submitted}`} className="bg-indigo-900/30 p-5 md:p-8 rounded-2xl md:rounded-3xl border border-white/10 shadow-lg w-full transition-all duration-500">
            <div className="text-lg md:text-2xl leading-relaxed text-slate-100 flex flex-wrap items-center gap-y-2">
              <span className="text-amber-500 font-cinzel mr-2 shrink-0">{idx + 1}.</span>
              {q.sentence.split('___').map((part, i, arr) => (
                <React.Fragment key={i}>
                  <span className="inline-block">{part}</span>
                  {i < arr.length - 1 && (
                    <input
                      disabled={submitted}
                      type="text"
                      className={`mx-1 w-32 md:w-40 bg-indigo-950/40 border-b-2 md:border-b-4 outline-none text-amber-400 font-bold px-2 md:px-3 py-1 transition-all text-center rounded-t-lg text-base md:text-xl
                        ${submitted 
                          ? results[q.id] 
                            ? 'border-green-500 bg-green-500/10' 
                            : 'border-red-500 bg-red-500/10' 
                          : 'border-amber-400 focus:border-amber-200 focus:bg-amber-400/5'}`}
                      placeholder={`(${q.verb})`}
                      value={answers[q.id] || ''}
                      onChange={(e) => handleInputChange(q.id, e.target.value)}
                    />
                  )}
                </React.Fragment>
              ))}
            </div>
            {submitted && (
              <div className="mt-4 md:mt-6 flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-3 animate-fadeIn text-sm md:text-base">
                {!results[q.id] ? (
                  <>
                    <span className="text-red-400 font-bold">✗ Incorrect:</span>
                    <span className="text-white bg-red-500/20 px-3 md:px-4 py-1 rounded-full border border-red-500/50">
                      Correct: <span className="font-bold underline">{q.correctForm}</span>
                    </span>
                  </>
                ) : (
                  <>
                    <span className="text-green-400 font-bold">✓ Perfect!</span>
                    <span className="text-white bg-green-500/20 px-3 md:px-4 py-1 rounded-full border border-green-500/50 italic">
                      Correctly used the {q.type} form.
                    </span>
                  </>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="pt-4 md:pt-8 space-y-4">
        {!submitted ? (
          <button
            onClick={handleSubmit}
            className="w-full py-4 md:py-5 bg-amber-500 hover:bg-amber-400 text-indigo-950 font-black text-lg md:text-xl rounded-2xl shadow-xl transition-all transform hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-3"
          >
            <span>SUBMIT TRIAL</span>
            <span className="text-xl md:text-2xl">⚡</span>
          </button>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button
              onClick={initQuiz}
              className="w-full py-4 md:py-5 bg-amber-500 hover:bg-amber-400 text-indigo-950 font-black text-lg md:text-xl rounded-2xl shadow-xl transition-all transform hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-3"
            >
              <span>PLAY AGAIN</span>
              <span className="text-xl md:text-2xl">🔄</span>
            </button>
            <button
              onClick={() => onComplete(Object.values(results).filter(Boolean).length)}
              className="w-full py-4 md:py-5 bg-indigo-600 hover:bg-indigo-500 text-white font-black text-lg md:text-xl rounded-2xl shadow-xl transition-all transform hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-3"
            >
              <span>RETURN TO ARCHIVES</span>
              <span className="text-xl md:text-2xl">🏛️</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizView;
