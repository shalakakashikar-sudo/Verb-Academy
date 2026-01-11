
import { Lesson, VerbForm } from '../types';

export const lesson1: Lesson = {
  id: 'l1',
  title: 'The Unchanging Treasures',
  description: 'Learn verbs where V1, V2, and V3 are exactly the same!',
  content: [
    'Welcome to the Cave of Secrets! Some verbs are as solid as gold and never change form between V1, V2, and V3.',
    'Example: Today I cut. Yesterday I cut. I have cut.',
    'This is the complete list of common immutable verbs. Memorize them to never be fooled by the shifting sands of time!',
  ],
  verbs: [
    'beset', 'bet', 'bid', 'broadcast', 'burst', 'cast', 'cost', 'cut', 'fit', 'hit', 'hurt', 'let', 'preset', 'put', 'quit', 'read', 'reset', 'set', 'shed', 'shut', 'slit', 'split', 'spread', 'thrust', 'upset', 'wed'
  ],
  quiz: [
    { id: 'q1', sentence: 'Yesterday, the merchant ___ the silk with golden scissors.', verb: 'cut', correctForm: 'cut', type: VerbForm.V2 },
    { id: 'q2', sentence: 'He is ___ the magic lamp on the table right now.', verb: 'put', correctForm: 'putting', type: VerbForm.ING_FORM },
    { id: 'q3', sentence: 'The guard always ___ his price high.', verb: 'set', correctForm: 'sets', type: VerbForm.S_FORM },
    { id: 'q1a', sentence: 'The treasure chest has ___ much more than we expected.', verb: 'cost', correctForm: 'cost', type: VerbForm.V3 },
    { id: 'q1b', sentence: 'He ___ the door firmly before the sandstorm hit.', verb: 'shut', correctForm: 'shut', type: VerbForm.V2 },
  ]
};
