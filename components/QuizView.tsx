
import React, { useState } from 'react';
import { QuizQuestion, MascotMood } from '../types';
import { HEDGEHOG_PHRASES } from './HedgehogMascot';

interface QuizViewProps {
  questions: QuizQuestion[];
  onComplete: (score: number) => void;
  onMascotUpdate: (mood: MascotMood, message: string) => void;
}

const QuizView: React.FC<QuizViewProps> = ({ questions, onComplete, onMascotUpdate }) => {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [results, setResults] = useState<Record<string, boolean>>({});

  const handleInputChange = (id: string, value: string) => {
    setAnswers(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async () => {
    const newResults: Record<string, boolean> = {};
    let score = 0;
    
    questions.forEach(q => {
      const isCorrect = answers[q.id]?.toLowerCase().trim() === q.correctForm.toLowerCase();
      newResults[q.id] = isCorrect;
      if (isCorrect) score++;
    });

    setResults(newResults);
    setSubmitted(true);

    const mood: MascotMood = score === questions.length ? 'celebrating' : score > 0 ? 'happy' : 'confused';
    
    const phraseCategory = score === questions.length ? HEDGEHOG_PHRASES.correct : score > 0 ? HEDGEHOG_PHRASES.correct : HEDGEHOG_PHRASES.incorrect;
    const comment = phraseCategory[Math.floor(Math.random() * phraseCategory.length)];
    
    onMascotUpdate(mood, comment);
  };

  return (
    <div className="space-y-10 animate-slideUp">
      <div className="space-y-8">
        {questions.map((q, idx) => (
          <div key={q.id} className="bg-indigo-900/30 p-8 rounded-3xl border border-white/10 shadow-lg">
            <div className="text-xl md:text-2xl leading-relaxed text-slate-100">
              <span className="text-amber-500 font-cinzel mr-4">{idx + 1}.</span>
              {q.sentence.split('___').map((part, i, arr) => (
                <React.Fragment key={i}>
                  {part}
                  {i < arr.length - 1 && (
                    <input
                      disabled={submitted}
                      type="text"
                      className={`mx-3 w-40 bg-indigo-950/40 border-b-4 outline-none text-amber-400 font-bold px-3 py-1 transition-all text-center rounded-t-lg
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
              <div className="mt-6 flex items-center gap-3 animate-fadeIn">
                {!results[q.id] ? (
                  <>
                    <span className="text-red-400 font-bold text-lg">✗ Incorrect:</span>
                    <span className="text-white bg-red-500/20 px-4 py-1 rounded-full border border-red-500/50">
                      The correct form is <span className="font-bold underline">{q.correctForm}</span>
                    </span>
                  </>
                ) : (
                  <>
                    <span className="text-green-400 font-bold text-lg">✓ Perfect!</span>
                    <span className="text-white bg-green-500/20 px-4 py-1 rounded-full border border-green-500/50 italic">
                      Correctly used the {q.type} form.
                    </span>
                  </>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="pt-8">
        {!submitted ? (
          <button
            onClick={handleSubmit}
            className="w-full py-5 bg-amber-500 hover:bg-amber-400 text-indigo-950 font-black text-xl rounded-2xl shadow-xl transition-all transform hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-3"
          >
            <span>SUBMIT MY ANSWERS</span>
            <span className="text-2xl">⚡</span>
          </button>
        ) : (
          <button
            onClick={() => onComplete(Object.values(results).filter(Boolean).length)}
            className="w-full py-5 bg-indigo-600 hover:bg-indigo-500 text-white font-black text-xl rounded-2xl shadow-xl transition-all transform hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-3"
          >
            <span>RETURN TO ARCHIVES</span>
            <span className="text-2xl">🏛️</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default QuizView;
