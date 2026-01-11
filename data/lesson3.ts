
import { Lesson, VerbForm } from '../types';

export const lesson3: Lesson = {
  id: 'l3',
  title: 'The Shapeshifters',
  description: 'Irregular verbs that change completely across all forms.',
  content: [
    'Some verbs are like magic spirits—they change their shape completely!',
    'Unlike Regular Rubies, these do not just add -ed. They shift their vowels or change entirely.',
    'Go -> Went -> Gone. These are the most powerful keys to unlocking the English language.',
    'This list contains every common irregular verb you will ever need on your journey.',
  ],
  verbs: [
    'arise', 'awake', 'be', 'bear', 'beat', 'become', 'begin', 'bend', 'bind', 'bite', 
    'bleed', 'blow', 'break', 'breed', 'bring', 'build', 'buy', 'catch', 'choose', 'cling', 
    'come', 'creep', 'deal', 'dig', 'do', 'draw', 'dream', 'drink', 'drive', 'eat', 
    'fall', 'feed', 'feel', 'fight', 'find', 'flee', 'fling', 'fly', 'forbid', 'forget', 
    'forsake', 'freeze', 'get', 'give', 'go', 'grind', 'grow', 'hang', 'have', 'hear', 
    'hide', 'hold', 'keep', 'kneel', 'know', 'lay', 'lead', 'leap', 'leave', 'lend', 
    'lie', 'light', 'lose', 'make', 'mean', 'meet', 'pay', 'ride', 'ring', 'rise', 
    'run', 'say', 'see', 'seek', 'sell', 'send', 'shake', 'shine', 'shoot', 'show', 
    'shrink', 'sing', 'sink', 'sit', 'slay', 'sleep', 'slide', 'sling', 'slink', 'speak', 
    'spend', 'spin', 'spit', 'spring', 'stand', 'steal', 'stick', 'sting', 'stink', 'stride', 
    'strike', 'strive', 'swear', 'sweep', 'swim', 'swing', 'take', 'teach', 'tear', 'tell', 
    'think', 'throw', 'tread', 'undergo', 'understand', 'uphold', 'wake', 'wear', 'weave', 'weep', 
    'win', 'wind', 'withdraw', 'write', 'wring'
  ],
  quiz: [
    { id: 'q7', sentence: 'The magic spirit has ___ to the desert.', verb: 'go', correctForm: 'gone', type: VerbForm.V3 },
    { id: 'q8', sentence: 'I ___ a flying carpet in the sky last night!', verb: 'see', correctForm: 'saw', type: VerbForm.V2 },
    { id: 'q9', sentence: 'He has already ___ his royal homework.', verb: 'do', correctForm: 'done', type: VerbForm.V3 },
    { id: 'q3a', sentence: 'The sun had already ___ over the palace dunes.', verb: 'rise', correctForm: 'risen', type: VerbForm.V3 },
    { id: 'q3b', sentence: 'She ___ the heavy golden shield with both hands.', verb: 'hold', correctForm: 'held', type: VerbForm.V2 },
    { id: 'q3c', sentence: 'He is ___ a message to the distant kingdom.', verb: 'write', correctForm: 'writing', type: VerbForm.ING_FORM },
    { id: 'q3d', sentence: 'The thief has ___ the ruby from the statue!', verb: 'steal', correctForm: 'stolen', type: VerbForm.V3 },
  ]
};
