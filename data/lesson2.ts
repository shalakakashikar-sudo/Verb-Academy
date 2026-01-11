
import { Lesson, VerbForm } from '../types';

export const lesson2: Lesson = {
  id: 'l2',
  title: 'Regular Rubies',
  description: 'Master the common pattern: adding -ed for the past!',
  content: [
    'Most verbs in the kingdom follow a simple path. Just add -ed to travel to the past.',
    'V2 and V3 are usually identical in this group.',
    'Watch out for the -s form for third-person singular (He/She/It)!',
    'Some verbs change slightly: "study" becomes "studied" and "stop" becomes "stopped".',
  ],
  verbs: [
    'add', 'agree', 'allow', 'answer', 'appear', 'arrive', 'ask', 'believe', 'belong', 'borrow',
    'call', 'carry', 'cause', 'change', 'check', 'clean', 'close', 'compare', 'complain', 'complete',
    'contain', 'continue', 'cook', 'copy', 'correct', 'count', 'cry', 'dance', 'decide', 'deliver',
    'describe', 'design', 'destroy', 'die', 'discuss', 'dress', 'dry', 'earn', 'end', 'enjoy',
    'enter', 'expect', 'explain', 'fail', 'fear', 'fill', 'finish', 'fix', 'follow', 'form',
    'guess', 'happen', 'hate', 'help', 'hope', 'ignore', 'imagine', 'improve', 'include', 'increase',
    'inform', 'intend', 'interest', 'invite', 'join', 'jump', 'kick', 'kill', 'knock', 'laugh',
    'learn', 'lie', 'lift', 'listen', 'live', 'lock', 'look', 'love', 'manage', 'mark',
    'marry', 'match', 'measure', 'mention', 'miss', 'mix', 'move', 'name', 'need', 'note',
    'notice', 'number', 'offer', 'open', 'order', 'organize', 'pack', 'paint', 'pass', 'pause',
    'perform', 'phone', 'pick', 'place', 'plan', 'play', 'point', 'polish', 'post', 'pour',
    'practise', 'pray', 'prepare', 'present', 'press', 'prevent', 'produce', 'promise', 'protect', 'provide',
    'pull', 'push', 'question', 'rain', 'raise', 'reach', 'realize', 'receive', 'recognize', 'record',
    'reduce', 'reflect', 'refuse', 'regard', 'relax', 'remain', 'remember', 'remind', 'remove', 'repair',
    'repeat', 'replace', 'reply', 'report', 'request', 'rescue', 'return', 'reveal', 'save', 'search',
    'serve', 'settle', 'share', 'shout', 'sign', 'smile', 'sound', 'start', 'stay', 'stop',
    'study', 'suggest', 'support', 'suppose', 'surprise', 'talk', 'thank', 'touch', 'train', 'travel',
    'treat', 'trust', 'try', 'turn', 'use', 'visit', 'wait', 'walk', 'want', 'wash',
    'watch', 'wonder', 'work', 'worry'
  ],
  quiz: [
    { id: 'q4', sentence: 'The street traveler ___ to the palace yesterday.', verb: 'walk', correctForm: 'walked', type: VerbForm.V2 },
    { id: 'q5', sentence: 'The little monkey is ___ with the emeralds.', verb: 'play', correctForm: 'playing', type: VerbForm.ING_FORM },
    { id: 'q6', sentence: 'The princess ___ delicious meals for the Sultan.', verb: 'cook', correctForm: 'cooks', type: VerbForm.S_FORM },
    { id: 'q2a', sentence: 'He has ___ to the village to find more water.', verb: 'travel', correctForm: 'traveled', type: VerbForm.V3 },
    { id: 'q2b', sentence: 'They are ___ for the sandstorm to end.', verb: 'wait', correctForm: 'waiting', type: VerbForm.ING_FORM },
  ]
};
