import React, { useState, useEffect } from 'react';
import { MascotMood } from '../types';

// --- EXPANDED WITTY DESERT THEME PHRASES ---
export const HEDGEHOG_PHRASES = {
  welcome: [
    "Greetings, Traveler! I am Hedgie, Guardian of the Verb Sands.",
    "Welcome to the Dunes of Grammar! Watch out for irregular scorpions.",
    "Seek you the Treasure of the Past Participle? Follow me!",
    "Hello! The Cave of Wonders is full of... verb conjugations.",
    "Shake the sand off your boots. We have much to learn!",
    "I've been waiting for a student as bright as the desert sun.",
  ],
  correct: [
    "By the Sultan's beard! That was correct!",
    "A diamond in the rough! You found the right form!",
    "The oasis reveals itself! splendid work.",
    "Sharper than a cactus spine! Well done.",
    "The genie grants your wish! That is the correct verb.",
    "You possess the wisdom of the ancients!",
    "No mirage here—that answer was solid gold!",
  ],
  incorrect: [
    "Oh no! Slipped in the quicksand. Try again!",
    "That answer was a mere mirage. Look closer.",
    "The sandstorm clouded your vision. Give it another go.",
    "A bit dry... try a different conjugation.",
    "The Sphinx is not impressed. Try again, traveler!",
  ],
  idle: [
    "Is it hot out here, or is it just my intense intellect?",
    "I think I saw a 'Go-Went-Gone' lizard scurry by...",
    "Just shaking the golden dust from my quills...",
    "Do you think camels worry about past participles?",
    "I'd trade three verbs for a cold drink of water right now.",
    "Waiting for your command, oh Master of Grammar.",
    "If I sit here long enough, I might turn into a fossil.",
  ],
  click: [
    "Hey! Watch the quills, they are freshly polished.",
    "I'm not a pincushion, I'm a high-level educator!",
    "Ticklish! The desert heat makes me sensitive.",
    "Stop poking and start conjugating!",
  ],
  eating: [
    "Mmm... a desert berry! Sweet as success.",
    "Crunchy! Keeps my energy up for all this teaching.",
    "Nom nom nom... sustenance for the journey.",
    "Finally! A snack break in this barren wasteland.",
  ],
  love: [
    "You are my favorite traveler in the whole caravan!",
    "I love how hard you are studying!",
    "My prickly heart beats for your grammar skills!",
    "You're sweeter than a fresh date from the palm tree.",
  ],
  sleeping: [
    "Zzz... dreaming of verbs... zzz...",
    "Just... resting my eyes from the sun... zzz...",
    "Wake me up when we find the treasure...",
    "Zzz... irregulars are exhausting... zzz...",
  ],
  surprised: [
    "Great dunes of fire! I'm awake!",
    "What? Who? Where? Did we find the treasure?!",
    "By the Pharaoh's cat! You startled me!",
  ]
};

interface HedgehogMascotProps {
  mood?: MascotMood;
  externalMessage?: string;
}

const HedgehogMascot: React.FC<HedgehogMascotProps> = ({ mood = 'idle', externalMessage }) => {
  const [currentMood, setCurrentMood] = useState<MascotMood>(mood);
  const [bubbleText, setBubbleText] = useState("I'm Hedgie! Guardian of the Sands.");
  
  // Interaction State: 'none' -> 'eating' -> 'love' -> 'sleeping' -> 'none'
  const [interactionState, setInteractionState] = useState<'none' | 'eating' | 'sleeping'>('none');

  // 1. Handle External Mood Changes (Game Logic)
  useEffect(() => {
    // Only update if we aren't currently interacting/animating
    if (interactionState === 'none') {
      setCurrentMood(mood);
      if (mood === 'celebrating') {
        setBubbleText(HEDGEHOG_PHRASES.correct[Math.floor(Math.random() * HEDGEHOG_PHRASES.correct.length)]);
      } else if (mood === 'confused') {
        setBubbleText(HEDGEHOG_PHRASES.incorrect[Math.floor(Math.random() * HEDGEHOG_PHRASES.incorrect.length)]);
      }
    }
  }, [mood, interactionState]);

  // 2. Handle External Custom Messages
  useEffect(() => {
    if (externalMessage) setBubbleText(externalMessage);
  }, [externalMessage]);

  // 3. Idle Randomizer (looks around, makes witty comments)
  useEffect(() => {
    const interval = setInterval(() => {
      // Only randomize if idle and not showing a game result
      if (interactionState === 'none' && currentMood !== 'celebrating' && currentMood !== 'confused') {
        const idleMoods: MascotMood[] = ['happy', 'thinking', 'idle'];
        setCurrentMood(idleMoods[Math.floor(Math.random() * idleMoods.length)]);
        
        // 40% chance to update text to a witty idle phrase
        if (Math.random() > 0.6) {
           setBubbleText(HEDGEHOG_PHRASES.idle[Math.floor(Math.random() * HEDGEHOG_PHRASES.idle.length)]);
        }
      }
    }, 8000);
    return () => clearInterval(interval);
  }, [currentMood, interactionState]);

  // 4. Click Handler Cycle
  const handleMascotClick = () => {
    if (interactionState === 'eating') {
      // Phase 2: Love/Affection
      setInteractionState('none'); // release lock briefly to change mood
      setCurrentMood('love');
      setBubbleText(HEDGEHOG_PHRASES.love[Math.floor(Math.random() * HEDGEHOG_PHRASES.love.length)]);
      
      // Phase 3: Sleep
      setTimeout(() => {
        setInteractionState('sleeping');
        setCurrentMood('sleeping');
        setBubbleText(HEDGEHOG_PHRASES.sleeping[Math.floor(Math.random() * HEDGEHOG_PHRASES.sleeping.length)]);
      }, 2500);

    } else if (interactionState === 'sleeping') {
      // Phase 4: Wake Up
      setInteractionState('none');
      setCurrentMood('surprised');
      setBubbleText(HEDGEHOG_PHRASES.surprised[Math.floor(Math.random() * HEDGEHOG_PHRASES.surprised.length)]);
      setTimeout(() => setCurrentMood('idle'), 3000);

    } else {
      // Phase 1: Eat
      setInteractionState('eating');
      setCurrentMood('eating');
      setBubbleText(HEDGEHOG_PHRASES.eating[Math.floor(Math.random() * HEDGEHOG_PHRASES.eating.length)]);
    }
  };

  // --- CUTE SVG FACE GENERATOR ---
  const getFaceExpression = () => {
    const strokeDark = "#2D1B0E";
    const fillNone = "none";
    
    const expressions = {
      idle: {
        eyes: (
          <g>
            <circle cx="75" cy="105" r="5" fill={strokeDark} />
            <circle cx="125" cy="105" r="5" fill={strokeDark} />
            <circle cx="77" cy="103" r="2" fill="white" />
            <circle cx="127" cy="103" r="2" fill="white" />
          </g>
        ),
        mouth: <path d="M 95 115 Q 100 120 105 115" stroke={strokeDark} strokeWidth="3" fill={fillNone} strokeLinecap="round" />
      },
      happy: {
        eyes: (
          <g>
            <path d="M 70 105 Q 75 100 80 105" stroke={strokeDark} strokeWidth="3" fill={fillNone} strokeLinecap="round" />
            <path d="M 120 105 Q 125 100 130 105" stroke={strokeDark} strokeWidth="3" fill={fillNone} strokeLinecap="round" />
          </g>
        ),
        mouth: <path d="M 90 115 Q 100 125 110 115" stroke={strokeDark} strokeWidth="3" fill={fillNone} strokeLinecap="round" />
      },
      love: {
        eyes: (
          <g fill="#FF4444">
             <path d="M 75 108 L 71 103 A 2 2 0 0 1 75 100 A 2 2 0 0 1 79 103 Z" transform="scale(1.2) translate(-12, -3)" />
             <path d="M 125 108 L 121 103 A 2 2 0 0 1 125 100 A 2 2 0 0 1 129 103 Z" transform="scale(1.2) translate(-20, -3)" />
          </g>
        ),
        mouth: <path d="M 92 115 Q 100 122 108 115" stroke={strokeDark} strokeWidth="3" fill={fillNone} strokeLinecap="round" />
      },
      eating: {
        eyes: (
          <g>
            <path d="M 70 105 L 75 108 L 80 105" stroke={strokeDark} strokeWidth="3" fill={fillNone} strokeLinecap="round" />
            <path d="M 120 105 L 125 108 L 130 105" stroke={strokeDark} strokeWidth="3" fill={fillNone} strokeLinecap="round" />
          </g>
        ),
        mouth: <path d="M 95 115 Q 100 125 105 115" fill="#FF9999" stroke={strokeDark} strokeWidth="2" />
      },
      sleeping: {
        eyes: (
          <g>
             <path d="M 70 105 Q 75 108 80 105" stroke={strokeDark} strokeWidth="3" fill={fillNone} strokeLinecap="round" />
             <path d="M 120 105 Q 125 108 130 105" stroke={strokeDark} strokeWidth="3" fill={fillNone} strokeLinecap="round" />
          </g>
        ),
        mouth: <circle cx="100" cy="118" r="2" fill={strokeDark} />
      },
      surprised: {
        eyes: (
          <g>
            <circle cx="75" cy="105" r="7" fill="white" stroke={strokeDark} strokeWidth="2" />
            <circle cx="75" cy="105" r="2" fill={strokeDark} />
            <circle cx="125" cy="105" r="7" fill="white" stroke={strokeDark} strokeWidth="2" />
            <circle cx="125" cy="105" r="2" fill={strokeDark} />
          </g>
        ),
        mouth: <ellipse cx="100" cy="120" rx="4" ry="6" fill={strokeDark} />
      },
      thinking: {
        eyes: (
          <g>
            <circle cx="75" cy="100" r="5" fill={strokeDark} />
            <path d="M 120 105 Q 125 105 130 105" stroke={strokeDark} strokeWidth="3" fill={fillNone} strokeLinecap="round" />
          </g>
        ),
        mouth: <path d="M 95 120 L 105 120" stroke={strokeDark} strokeWidth="3" fill={fillNone} strokeLinecap="round" />
      },
      celebrating: {
        eyes: (
          <g>
             <path d="M 70 108 Q 75 100 80 108" stroke={strokeDark} strokeWidth="3" fill={fillNone} strokeLinecap="round" />
             <path d="M 120 108 Q 125 100 130 108" stroke={strokeDark} strokeWidth="3" fill={fillNone} strokeLinecap="round" />
          </g>
        ),
        mouth: <path d="M 90 115 Q 100 135 110 115" fill="#FF9999" stroke={strokeDark} strokeWidth="2" />
      },
      confused: {
        eyes: (
          <g>
            <circle cx="75" cy="105" r="6" fill={strokeDark} />
            <circle cx="125" cy="105" r="3" fill={strokeDark} />
            <path d="M 65 90 L 85 95" stroke={strokeDark} strokeWidth="2" /> 
          </g>
        ),
        mouth: <path d="M 95 120 Q 100 115 105 120" stroke={strokeDark} strokeWidth="3" fill={fillNone} strokeLinecap="round" />
      }
    };
    return expressions[currentMood as keyof typeof expressions] || expressions.idle;
  };

  const { eyes, mouth } = getFaceExpression();

  return (
    <div className="relative flex flex-col items-center select-none pt-36">
      
      {/* --- SPEECH BUBBLE --- */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 bg-white text-slate-900 p-4 rounded-3xl shadow-xl border-4 border-amber-400 text-sm font-semibold animate-float z-30 transition-all duration-300">
        <p className="text-center italic font-medium leading-relaxed">"{bubbleText}"</p>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[12px] border-t-white"></div>
        
        {/* Zzz Animation for Sleeping */}
        {currentMood === 'sleeping' && (
          <div className="absolute -top-8 -right-4 text-blue-400 font-bold text-2xl animate-bounce">
            Zzz...
          </div>
        )}
      </div>

      {/* --- CUTE HEDGEHOG VISUALS --- */}
      <div 
        onClick={handleMascotClick}
        className="group relative cursor-pointer transition-transform hover:scale-105 active:scale-95 duration-300 w-56 h-48"
      >
        <svg viewBox="0 0 200 170" className="w-full h-full drop-shadow-2xl overflow-visible">
          
          {/* Back Quills (Spiky Layer) */}
          <g className="origin-bottom transition-transform duration-500 group-hover:rotate-1">
            <path 
              d="M 20 120 Q 10 90 30 70 L 40 50 L 60 30 L 90 20 L 120 25 L 150 40 L 170 60 L 185 90 Q 190 120 170 140 L 150 145 L 50 145 L 30 140 Z" 
              fill="#8B5E3C" 
              stroke="#5D4037" 
              strokeWidth="3"
            />
            {/* Texture Spikes for cuteness */}
            <path d="M 40 50 L 50 70 L 30 80 Z" fill="#6D4C41" />
            <path d="M 70 30 L 80 50 L 60 60 Z" fill="#6D4C41" />
            <path d="M 110 25 L 115 50 L 95 50 Z" fill="#6D4C41" />
            <path d="M 150 40 L 140 65 L 160 70 Z" fill="#6D4C41" />
          </g>

          {/* Body (Cream Part - Fluffy shape) */}
          <path 
            d="M 45 145 C 45 90 60 60 100 60 C 140 60 155 90 155 145 Z" 
            fill="#FDF5E6" 
            stroke="#E6CCB2" 
            strokeWidth="2"
          />

          {/* Ears */}
          <circle cx="55" cy="85" r="10" fill="#FDF5E6" stroke="#8B5E3C" strokeWidth="2" />
          <circle cx="55" cy="85" r="5" fill="#E6CCB2" />
          <circle cx="145" cy="85" r="10" fill="#FDF5E6" stroke="#8B5E3C" strokeWidth="2" />
          <circle cx="145" cy="85" r="5" fill="#E6CCB2" />

          {/* Cheeks (Blush) */}
          <ellipse cx="65" cy="115" rx="8" ry="5" fill="#FFB6C1" opacity="0.6" />
          <ellipse cx="135" cy="115" rx="8" ry="5" fill="#FFB6C1" opacity="0.6" />

          {/* Dynamic Face */}
          <g className="transition-all duration-300">
             {eyes}
             {mouth}
          </g>

          {/* Nose */}
          <ellipse cx="100" cy="110" rx="6" ry="4" fill="#2D1B0E" />
          <ellipse cx="98" cy="109" rx="2" ry="1" fill="white" opacity="0.5" />

          {/* Paws (Holding position) */}
          <path d="M 70 145 Q 70 135 80 135 Q 90 135 90 145" fill="#FDF5E6" stroke="#E6CCB2" strokeWidth="2" />
          <path d="M 110 145 Q 110 135 120 135 Q 130 135 130 145" fill="#FDF5E6" stroke="#E6CCB2" strokeWidth="2" />

          {/* STRAWBERRY (Only visible when eating - Positioned in paws) */}
          {interactionState === 'eating' && (
            <g transform="translate(95, 135) rotate(15)">
               <path d="M -10 0 Q -12 -15 0 -15 Q 12 -15 10 0 Q 0 15 -10 0" fill="#FF4444" stroke="#CC0000" strokeWidth="1" />
               <path d="M 0 -15 L -5 -20 M 0 -15 L 0 -22 M 0 -15 L 5 -20" stroke="#4CAF50" strokeWidth="2" />
               <circle cx="-5" cy="-5" r="0.5" fill="#FFCCBC" />
               <circle cx="0" cy="-2" r="0.5" fill="#FFCCBC" />
               <circle cx="5" cy="-8" r="0.5" fill="#FFCCBC" />
            </g>
          )}
        </svg>
      </div>

      {/* Sand/Desert Plinth */}
      <div className="relative -mt-6 z-[-1]">
         <div className="w-48 h-10 bg-amber-200 rounded-[50%] border-b-4 border-amber-300 opacity-80"></div>
      </div>
      
      <div className="text-[10px] text-amber-600/60 font-bold uppercase tracking-widest mt-4 animate-pulse">
         Click to feed Hedgie!
      </div>
    </div>
  );
};

export default HedgehogMascot;