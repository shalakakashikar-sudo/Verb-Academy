
export enum VerbForm {
  V1 = 'V1', // Base
  V2 = 'V2', // Past Simple
  V3 = 'V3', // Past Participle
  S_FORM = 'S_FORM', // 3rd Person Singular
  ING_FORM = 'ING_FORM' // Present Participle
}

export interface Verb {
  base: string;
  v2: string;
  v3: string;
  s: string;
  ing: string;
  type: 'regular' | 'irregular' | 'immutable';
  meaning: string;
}

export interface QuizQuestion {
  id: string;
  sentence: string; // e.g., "He ___ (go) to the market yesterday."
  verb: string;
  correctForm: string;
  type: VerbForm;
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  content: string[];
  verbs: string[]; // List of base verbs featured in this lesson
  quiz: QuizQuestion[];
}

export type MascotMood = 'idle' | 'happy' | 'thinking' | 'eating' | 'celebrating' | 'confused' | 'love' | 'sleeping' | 'surprised';

export interface MascotState {
  mood: MascotMood;
  message: string;
}
