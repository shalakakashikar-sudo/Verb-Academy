
import { Lesson, VerbForm } from '../types';

export const lesson3: Lesson = {
  id: 'l3',
  title: 'The Shapeshifters (Irregular Verbs)',
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
    'hide', 'hold', 'keep', 'kneel', 'know', 'lay', 'lead', 'leap', 'learn', 'leave', 'lend',
    'lie', 'light', 'lose', 'make', 'mean', 'meet', 'pay', 'ride', 'ring', 'rise',
    'run', 'say', 'see', 'seek', 'sell', 'send', 'shake', 'shine', 'shoot', 'show',
    'shrink', 'sing', 'sink', 'sit', 'slay', 'sleep', 'slide', 'sling', 'slink', 'speak',
    'spend', 'spin', 'spit', 'spring', 'stand', 'steal', 'stick', 'sting', 'stink', 'stride',
    'strike', 'strive', 'swear', 'sweep', 'swim', 'swing', 'take', 'teach', 'tear', 'tell',
    'think', 'throw', 'tread', 'undergo', 'understand', 'uphold', 'wake', 'wear', 'weave', 'weep',
    'win', 'wind', 'withdraw', 'write', 'wring'
  ],
  quiz: [
    // BATCH 1: 801-900
    // Fix: Changed Form.V2 to VerbForm.V2
    { id: 'q801', sentence: 'A new problem ___ yesterday unexpectedly.', verb: 'arise', correctForm: 'arose', type: VerbForm.V2 },
    // Fix: Changed Form.V3 to VerbForm.V3
    { id: 'q802', sentence: 'He has ___ from a long sleep.', verb: 'awake', correctForm: 'awoken', type: VerbForm.V3 },
    // Fix: Changed Form.V2 to VerbForm.V2
    { id: 'q803', sentence: 'They ___ at the park yesterday.', verb: 'be', correctForm: 'were', type: VerbForm.V2 },
    // Fix: Changed Form.V3 to VerbForm.V3
    { id: 'q804', sentence: 'She has ___ the burden alone for years.', verb: 'bear', correctForm: 'borne', type: VerbForm.V3 },
    { id: 'q805', sentence: 'My heart ___ faster when I run usually.', verb: 'beat', correctForm: 'beats', type: VerbForm.S_FORM },
    // Fix: Changed Form.V2 to VerbForm.V2
    { id: 'q806', sentence: 'The caterpillar ___ a butterfly last week.', verb: 'become', correctForm: 'became', type: VerbForm.V2 },
    // Fix: Changed Form.V3 to VerbForm.V3
    { id: 'q807', sentence: 'The show has already ___.', verb: 'begin', correctForm: 'begun', type: VerbForm.V3 },
    // Fix: Changed Form.V2 to VerbForm.V2
    { id: 'q808', sentence: 'He ___ the metal bar with his hands yesterday.', verb: 'bend', correctForm: 'bent', type: VerbForm.V2 },
    // Fix: Changed Form.V2 to VerbForm.V2
    { id: 'q809', sentence: 'They ___ the books together with rope yesterday.', verb: 'bind', correctForm: 'bound', type: VerbForm.V2 },
    // Fix: Changed Form.V2 to VerbForm.V2
    { id: 'q810', sentence: 'The dog ___ the postman last week.', verb: 'bite', correctForm: 'bit', type: VerbForm.V2 },
    { id: 'q811', sentence: 'His nose is ___ right now.', verb: 'bleed', correctForm: 'bleeding', type: VerbForm.ING_FORM },
    // Fix: Changed Form.V2 to VerbForm.V2
    { id: 'q812', sentence: 'The wind ___ the leaves away yesterday.', verb: 'blow', correctForm: 'blew', type: VerbForm.V2 },
    // Fix: Changed Form.V3 to VerbForm.V3
    { id: 'q813', sentence: 'I have ___ my favorite cup.', verb: 'break', correctForm: 'broken', type: VerbForm.V3 },
    // Fix: Changed Form.V1 to VerbForm.V1
    { id: 'q814', sentence: 'They ___ horses on this farm usually.', verb: 'breed', correctForm: 'breed', type: VerbForm.V1 },
    // Fix: Changed Form.V2 to VerbForm.V2
    { id: 'q815', sentence: 'She ___ gifts to the party yesterday.', verb: 'bring', correctForm: 'brought', type: VerbForm.V2 },
    { id: 'q816', sentence: 'He is ___ a sandcastle right now.', verb: 'build', correctForm: 'building', type: VerbForm.ING_FORM },
    // Fix: Changed Form.V2 to VerbForm.V2
    { id: 'q817', sentence: 'We ___ a new car last month.', verb: 'buy', correctForm: 'bought', type: VerbForm.V2 },
    // Fix: Changed Form.V2 to VerbForm.V2
    { id: 'q818', sentence: 'He ___ the ball in mid-air yesterday.', verb: 'catch', correctForm: 'caught', type: VerbForm.V2 },
    // Fix: Changed Form.V3 to VerbForm.V3
    { id: 'q819', sentence: 'She has ___ the red dress.', verb: 'choose', correctForm: 'chosen', type: VerbForm.V3 },
    // Fix: Changed Form.V2 to VerbForm.V2
    { id: 'q820', sentence: 'The child ___ to his mother yesterday.', verb: 'cling', correctForm: 'clung', type: VerbForm.V2 },
    // Fix: Changed Form.V2 to VerbForm.V2
    { id: 'q821', sentence: 'He ___ to the office late yesterday.', verb: 'come', correctForm: 'came', type: VerbForm.V2 },
    { id: 'q822', sentence: 'The spider is ___ up the wall right now.', verb: 'creep', correctForm: 'creeping', type: VerbForm.ING_FORM },
    // Fix: Changed Form.V2 to VerbForm.V2
    { id: 'q823', sentence: 'He ___ the cards to the players yesterday.', verb: 'deal', correctForm: 'dealt', type: VerbForm.V2 },
    // Fix: Changed Form.V2 to VerbForm.V2
    { id: 'q824', sentence: 'They ___ a deep hole in the garden yesterday.', verb: 'dig', correctForm: 'dug', type: VerbForm.V2 },
    // Fix: Changed Form.V3 to VerbForm.V3
    { id: 'q825', sentence: 'I have ___ my homework already.', verb: 'do', correctForm: 'done', type: VerbForm.V3 },
    // Fix: Changed Form.V2 to VerbForm.V2
    { id: 'q826', sentence: 'She ___ a beautiful portrait yesterday.', verb: 'draw', correctForm: 'drew', type: VerbForm.V2 },
    // Fix: Changed Form.V2 to VerbForm.V2
    { id: 'q827', sentence: 'He ___ of flying last night.', verb: 'dream', correctForm: 'dreamt', type: VerbForm.V2 },
    { id: 'q828', sentence: 'She is ___ coffee right now.', verb: 'drink', correctForm: 'drinking', type: VerbForm.ING_FORM },
    // Fix: Changed Form.V2 to VerbForm.V2
    { id: 'q829', sentence: 'He ___ to the coast last weekend.', verb: 'drive', correctForm: 'drove', type: VerbForm.V2 },
    // Fix: Changed Form.V3 to VerbForm.V3
    { id: 'q830', sentence: 'We have ___ all the cake.', verb: 'eat', correctForm: 'eaten', type: VerbForm.V3 },
    // Fix: Changed Form.V1 to VerbForm.V1
    { id: 'q831', sentence: 'Leaves ___ from the trees in autumn usually.', verb: 'fall', correctForm: 'fall', type: VerbForm.V1 },
    { id: 'q832', sentence: 'She ___ the birds every morning.', verb: 'feed', correctForm: 'feeds', type: VerbForm.S_FORM },
    // Fix: Changed Form.V2 to VerbForm.V2
    { id: 'q833', sentence: 'I ___ sick yesterday.', verb: 'feel', correctForm: 'felt', type: VerbForm.V2 },
    // Fix: Changed Form.V2 to VerbForm.V2
    { id: 'q834', sentence: 'They ___ bravely in the battle yesterday.', verb: 'fight', correctForm: 'fought', type: VerbForm.V2 },
    // Fix: Changed Form.V3 to VerbForm.V3
    { id: 'q835', sentence: 'He has ___ his lost keys.', verb: 'find', correctForm: 'found', type: VerbForm.V3 },
    // Fix: Changed Form.V2 to VerbForm.V2
    { id: 'q836', sentence: 'The refugees ___ the country last year.', verb: 'flee', correctForm: 'fled', type: VerbForm.V2 },
    // Fix: Changed Form.V2 to VerbForm.V2
    { id: 'q837', sentence: 'He ___ the stone into the river yesterday.', verb: 'fling', correctForm: 'flung', type: VerbForm.V2 },
    { id: 'q838', sentence: 'Birds are ___ south right now.', verb: 'fly', correctForm: 'flying', type: VerbForm.ING_FORM },
    { id: 'q839', sentence: 'The law ___ smoking here usually.', verb: 'forbid', correctForm: 'forbids', type: VerbForm.S_FORM },
    // Fix: Changed Form.V3 to VerbForm.V3
    { id: 'q840', sentence: 'I have ___ his name.', verb: 'forget', correctForm: 'forgotten', type: VerbForm.V3 },
    // Fix: Changed Form.V2 to VerbForm.V2
    { id: 'q841', sentence: 'He ___ his family long ago.', verb: 'forsake', correctForm: 'forsook', type: VerbForm.V2 },
    // Fix: Changed Form.V2 to VerbForm.V2
    { id: 'q842', sentence: 'The lake ___ over last winter.', verb: 'freeze', correctForm: 'froze', type: VerbForm.V2 },
    // Fix: Changed Form.V2 to VerbForm.V2
    { id: 'q843', sentence: 'I ___ a letter from him yesterday.', verb: 'get', correctForm: 'got', type: VerbForm.V2 },
    // Fix: Changed Form.V3 to VerbForm.V3
    { id: 'q844', sentence: 'She has ___ me a great gift.', verb: 'give', correctForm: 'given', type: VerbForm.V3 },
    // Fix: Changed Form.V2 to VerbForm.V2
    { id: 'q845', sentence: 'They ___ to the cinema last night.', verb: 'go', correctForm: 'went', type: VerbForm.V2 },
    { id: 'q846', sentence: 'The mill ___ wheat into flour usually.', verb: 'grind', correctForm: 'grinds', type: VerbForm.S_FORM },
    // Fix: Changed Form.V2 to VerbForm.V2
    { id: 'q847', sentence: 'The plant ___ three inches last week.', verb: 'grow', correctForm: 'grew', type: VerbForm.V2 },
    // Fix: Changed Form.V2 to VerbForm.V2
    { id: 'q848', sentence: 'He ___ his coat on the hook yesterday.', verb: 'hang', correctForm: 'hung', type: VerbForm.V2 },
    // Fix: Changed Form.V1 to VerbForm.V1
    { id: 'q849', sentence: 'I ___ a headache right now.', verb: 'have', correctForm: 'have', type: VerbForm.V1 },
    // Fix: Changed Form.V2 to VerbForm.V2
    { id: 'q850', sentence: 'She ___ a strange noise last night.', verb: 'hear', correctForm: 'heard', type: VerbForm.V2 },
    // Fix: Changed Form.V3 to VerbForm.V3
    { id: 'q851', sentence: 'The treasure is ___ in the cave.', verb: 'hide', correctForm: 'hidden', type: VerbForm.V3 },
    // Fix: Changed Form.V2 to VerbForm.V2
    { id: 'q852', sentence: 'He ___ the baby gently yesterday.', verb: 'hold', correctForm: 'held', type: VerbForm.V2 },
    // Fix: Changed Form.V1 to VerbForm.V1
    { id: 'q853', sentence: 'I ___ my promises usually.', verb: 'keep', correctForm: 'keep', type: VerbForm.V1 },
    // Fix: Changed Form.V2 to VerbForm.V2
    { id: 'q854', sentence: 'He ___ down to propose yesterday.', verb: 'kneel', correctForm: 'knelt', type: VerbForm.V2 },
    { id: 'q855', sentence: 'She ___ the answer now.', verb: 'know', correctForm: 'knows', type: VerbForm.S_FORM },
    // Fix: Changed Form.V1 to VerbForm.V1
    { id: 'q856', sentence: 'Please ___ the book on the table.', verb: 'lay', correctForm: 'lay', type: VerbForm.V1 },
    // Fix: Changed Form.V2 to VerbForm.V2
    { id: 'q857', sentence: 'He ___ the team to victory yesterday.', verb: 'lead', correctForm: 'led', type: VerbForm.V2 },
    { id: 'q858', sentence: 'The frog is ___ across the pond.', verb: 'leap', correctForm: 'leaping', type: VerbForm.ING_FORM },
    // Fix: Changed Form.V2 to VerbForm.V2
    { id: 'q859', sentence: 'They ___ the party early yesterday.', verb: 'leave', correctForm: 'left', type: VerbForm.V2 },
    // Fix: Changed Form.V3 to VerbForm.V3
    { id: 'q860', sentence: 'I have ___ him my car.', verb: 'lend', correctForm: 'lent', type: VerbForm.V3 },
    { id: 'q861', sentence: 'He is ___ on the sofa right now.', verb: 'lie', correctForm: 'lying', type: VerbForm.ING_FORM },
    // Fix: Changed Form.V2 to VerbForm.V2
    { id: 'q862', sentence: 'She ___ the candle yesterday.', verb: 'light', correctForm: 'lit', type: VerbForm.V2 },
    // Fix: Changed Form.V2 to VerbForm.V2
    { id: 'q863', sentence: 'We ___ the game last night.', verb: 'lose', correctForm: 'lost', type: VerbForm.V2 },
    // Fix: Changed Form.V3 to VerbForm.V3
    { id: 'q864', sentence: 'He has ___ a delicious cake.', verb: 'make', correctForm: 'made', type: VerbForm.V3 },
    { id: 'q865', sentence: 'That ___ a lot to me right now.', verb: 'mean', correctForm: 'means', type: VerbForm.S_FORM },
    // Fix: Changed Form.V2 to VerbForm.V2
    { id: 'q866', sentence: 'We ___ at the cafe yesterday.', verb: 'meet', correctForm: 'met', type: VerbForm.V2 },
    // Fix: Changed Form.V2 to VerbForm.V2
    { id: 'q867', sentence: 'He ___ the bill last night.', verb: 'pay', correctForm: 'paid', type: VerbForm.V2 },
    { id: 'q868', sentence: 'She ___ her bike to school usually.', verb: 'ride', correctForm: 'rides', type: VerbForm.S_FORM },
    // Fix: Changed Form.V2 to VerbForm.V2
    { id: 'q869', sentence: 'The phone ___ loudly five minutes ago.', verb: 'ring', correctForm: 'rang', type: VerbForm.V2 },
    // Fix: Changed Form.V3 to VerbForm.V3
    { id: 'q870', sentence: 'The sun has ___ in the east.', verb: 'rise', correctForm: 'risen', type: VerbForm.V3 },
    // Fix: Changed Form.V2 to VerbForm.V2
    { id: 'q871', sentence: 'He ___ a marathon last month.', verb: 'run', correctForm: 'ran', type: VerbForm.V2 },
    { id: 'q872', sentence: 'She ___ hello to everyone usually.', verb: 'say', correctForm: 'says', type: VerbForm.S_FORM },
    // Fix: Changed Form.V2 to VerbForm.V2
    { id: 'q873', sentence: 'I ___ a ghost yesterday!', verb: 'see', correctForm: 'saw', type: VerbForm.V2 },
    { id: 'q874', sentence: 'They are ___ a new home right now.', verb: 'seek', correctForm: 'seeking', type: VerbForm.ING_FORM },
    // Fix: Changed Form.V2 to VerbForm.V2
    { id: 'q875', sentence: 'He ___ his car last week.', verb: 'sell', correctForm: 'sold', type: VerbForm.V2 },
    // Fix: Changed Form.V3 to VerbForm.V3
    { id: 'q876', sentence: 'I have ___ the email.', verb: 'send', correctForm: 'sent', type: VerbForm.V3 },
    { id: 'q877', sentence: 'He ___ the bottle before opening it usually.', verb: 'shake', correctForm: 'shakes', type: VerbForm.S_FORM },
    // Fix: Changed Form.V2 to VerbForm.V2
    { id: 'q878', sentence: 'The sun ___ brightly yesterday.', verb: 'shine', correctForm: 'shone', type: VerbForm.V2 },
    // Fix: Changed Form.V2 to VerbForm.V2
    { id: 'q879', sentence: 'He ___ an arrow at the target yesterday.', verb: 'shoot', correctForm: 'shot', type: VerbForm.V2 },
    // Fix: Changed Form.V3 to VerbForm.V3
    { id: 'q880', sentence: 'She has ___ me her new dress.', verb: 'show', correctForm: 'shown', type: VerbForm.V3 },
    // Fix: Changed Form.V2 to VerbForm.V2
    { id: 'q881', sentence: 'The shirt ___ in the wash yesterday.', verb: 'shrink', correctForm: 'shrank', type: VerbForm.V2 },
    { id: 'q882', sentence: 'She is ___ a song right now.', verb: 'sing', correctForm: 'singing', type: VerbForm.ING_FORM },
    // Fix: Changed Form.V2 to VerbForm.V2
    { id: 'q883', sentence: 'The ship ___ to the bottom last year.', verb: 'sink', correctForm: 'sank', type: VerbForm.V2 },
    // Fix: Changed Form.V2 to VerbForm.V2
    { id: 'q884', sentence: 'He ___ in the front row yesterday.', verb: 'sit', correctForm: 'sat', type: VerbForm.V2 },
    // Fix: Changed Form.V2 to VerbForm.V2
    { id: 'q885', sentence: 'The knight ___ the dragon in the story.', verb: 'slay', correctForm: 'slew', type: VerbForm.V2 },
    // Fix: Changed Form.V2 to VerbForm.V2
    { id: 'q886', sentence: 'I ___ well last night.', verb: 'sleep', correctForm: 'slept', type: VerbForm.V2 },
    { id: 'q887', sentence: 'The kids are ___ down the hill.', verb: 'slide', correctForm: 'sliding', type: VerbForm.ING_FORM },
    // Fix: Changed Form.V2 to VerbForm.V2
    { id: 'q888', sentence: 'He ___ the bag over his shoulder yesterday.', verb: 'sling', correctForm: 'slung', type: VerbForm.V2 },
    // Fix: Changed Form.V2 to VerbForm.V2
    { id: 'q889', sentence: 'The cat ___ away silently a moment ago.', verb: 'slink', correctForm: 'slunk', type: VerbForm.V2 },
    // Fix: Changed Form.V3 to VerbForm.V3
    { id: 'q890', sentence: 'He has ___ to the manager.', verb: 'speak', correctForm: 'spoken', type: VerbForm.V3 },
    // Fix: Changed Form.V2 to VerbForm.V2
    { id: 'q891', sentence: 'She ___ too much money yesterday.', verb: 'spend', correctForm: 'spent', type: VerbForm.V2 },
    { id: 'q892', sentence: 'The dancer is ___ around right now.', verb: 'spin', correctForm: 'spinning', type: VerbForm.ING_FORM },
    // Fix: Changed Form.V2 to VerbForm.V2
    { id: 'q893', sentence: 'The camel ___ at the tourist yesterday.', verb: 'spit', correctForm: 'spat', type: VerbForm.V2 },
    // Fix: Changed Form.V2 to VerbForm.V2
    { id: 'q894', sentence: 'The cat ___ onto the table suddenly.', verb: 'spring', correctForm: 'sprang', type: VerbForm.V2 },
    { id: 'q895', sentence: 'He is ___ at the bus stop now.', verb: 'stand', correctForm: 'standing', type: VerbForm.ING_FORM },
    // Fix: Changed Form.V2 to VerbForm.V2 and removed truncated line at the end
    { id: 'q896', sentence: 'Someone ___ my wallet yesterday.', verb: 'steal', correctForm: 'stole', type: VerbForm.V2 },
  ]
};
