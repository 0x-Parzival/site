import {
  MeditationCategory,
  KeyFigure,
  TantraPrinciple,
  TantraClassification,
  ComparativeApproach
} from '../types/tantra';

export const keyFigures: KeyFigure[] = [
  {
    name: 'Gorakhnath',
    icon: '🧘‍♂️',
    description: 'A pivotal figure in the Nath Hindu monastic movement, Gorakhnath is celebrated for his contributions to Hatha Yoga and Tantra. He is regarded as a Mahayogi who emphasized a practical path to Samadhi through dedicated spiritual discipline and yogic practices. His focus on experiential yoga resonates with the emphasis on direct realization often attributed to Tantra.'
  },
  {
    name: 'Shiva',
    icon: '🕉️',
    description: 'Shiva, the Adi Yogi or first yogi, stands as the ultimate source of yoga and Tantra. The doctrine of yoga is traditionally believed to have been imparted by Shiva. In Tantric philosophy, Shiva represents pure consciousness (Purusha), while Shakti embodies energy (Prakriti), and their inseparable union forms the foundational principle of this spiritual path.'
  }
];

export const meditationCategories: MeditationCategory[] = [
  {
    name: 'Breath Awareness',
    icon: '🌬️',
    techniques: [
      { description: 'Focus on the moment between the incoming and outgoing breath.' },
      { description: 'Realize the moment when the breath transitions from inhalation to exhalation.' },
      { description: 'When the in-breath and out-breath meet, touch the energy-less, energy-filled center.' },
      { description: 'When breath is all out and stopped of itself, or all in and stopped – in such universal pause, one\'s small self vanishes.' }
    ]
  },
  {
    name: 'Sensory Focus',
    icon: '👂',
    techniques: [
      { description: 'Focus on internal or external sounds. Listen to the Anahata (heart) sound.' },
      { description: 'Chant the letter अ (A) without additional sounds.' },
      { description: 'With mouth slightly open, keep mind in the middle of the tongue.' },
      { description: 'When eating or drinking, become the taste of food or drink and be filled.' },
      { description: 'Intone a sound, as AUM, slowly. As sound enters soundfulness, so do you.' }
    ]
  },
  {
    name: 'Visualization',
    icon: '👁️‍🗨️',
    techniques: [
      { description: 'Visualize energy, like sunlight, moving from the base chakra to the crown.' },
      { description: 'Imagine the five coloured circles of the peacock tail to be your five senses in illimitable space. Now let their beauty melt within. Similarly, at any point in space or on a wall – until the point dissolves.' },
      { description: 'Consider any area of your present form as limitlessly spacious.' },
      { description: 'Feel your substance, bones, flesh, blood, saturated with cosmic essence.' }
    ]
  },
  {
    name: 'States of Being',
    icon: '🛌',
    techniques: [
      { description: 'Focus on the state transitioning from wakefulness to sleep.' },
      { description: 'Lie down as dead. Enraged in wrath, stay so. Or stare without winking. Or suck something and become the sucking.' },
      { description: 'Be undisturbed in moods of extreme desire.' },
      { description: 'This so-called universe appears as a juggling, a picture show. To be happy, look upon it so.' }
    ]
  },
  {
    name: 'Action-Oriented',
    icon: '🏃',
    techniques: [
      { description: 'While in worldly activities, keep attention between two breaths, and so practicing, in a few days be born anew.' },
      { description: 'Roam about until exhausted and then, dropping to the ground, in this dropping be whole.' },
      { description: 'Look lovingly at some object. Do not go to another object. Here in the middle of the object – the blessing.' },
      { description: 'Wherever your mind is wandering, internally or externally, at this very place, this.' }
    ]
  }
];

export const tantraPrinciples: TantraPrinciple[] = [
  {
    title: 'Embracing the Present Moment',
    icon: '⏱️',
    description: 'Immersing fully in the "here and now," letting go of past preoccupations or future anxieties. Mindful presence is key to awakening.'
  },
  {
    title: 'Interconnectedness',
    icon: '🔗',
    description: 'Recognizing that all aspects of existence are interwoven and the divine essence resides within oneself and the world, fostering unity.'
  },
  {
    title: 'Sacredness of the Body',
    icon: '🧘',
    description: 'Viewing the physical form not as an obstacle but as a divine vessel housing spiritual energy. Honoring the body is integral to growth.'
  },
  {
    title: 'Energy Cultivation',
    icon: '⚡',
    description: 'Awakening, harnessing, and channeling inherent energy (prana, Kundalini) to facilitate transformation and elevate consciousness.'
  },
  {
    title: 'Non-Duality',
    icon: '🌀',
    description: 'Realizing that apparent divisions in the world are illusory and the true nature of reality is oneness. This integrates all dimensions of experience.'
  }
];

export const tantraClassifications: TantraClassification[] = [
  {
    title: 'Buddhist Tantra Classifications',
    description: 'In Buddhist Tantra, especially within the Sarma (New Translation) schools, practices are often grouped into four main categories:',
    subcategories: [
      {
        name: 'Kriya Tantra (Action Tantra)',
        description: 'Focuses on external ritual activities, purification, and seeking blessings from deities. Suited for practitioners who rely on external aids.'
      },
      {
        name: 'Charya Tantra (Performance/Behavioral Tantra)',
        description: 'Balances external ritual with internal meditation. The practitioner sees the deity as a friend or master.'
      },
      {
        name: 'Yoga Tantra (Integrated Deity Practice)',
        description: 'Emphasizes internal yoga and visualization. The practitioner cultivates a deeper identification with the deity.'
      },
      {
        name: 'Anuttarayoga Tantra (Highest Yoga Tantra)',
        description: 'Considered the most profound, working directly with subtle energies and consciousness to achieve rapid transformation. Involves complex visualizations and yogic practices.'
      }
    ]
  },
  {
    title: 'Hindu Tantra Classifications',
    description: 'Within Hindu Tantra (Shaiva and Shakta traditions), classifications can vary. Some common distinctions include:',
    subcategories: [
      {
        name: 'Kaula Path',
        description: 'Emphasizes external rituals and often community-based practices. Can sometimes involve unconventional methods.'
      },
      {
        name: 'Mishra Path (Mixed)',
        description: 'Blends internal meditative practices with external rituals.'
      },
      {
        name: 'Samaya Path (Internal)',
        description: 'Purely internal and meditative, focusing on chakra worship and Kundalini yoga, often considered very refined.'
      }
    ]
  }
];

export const comparativeApproaches: ComparativeApproach[] = [
  {
    approach: '112 Meditations (Vigyan Bhairav Tantra)',
    primaryFocus: 'Diverse experiential techniques engaging various aspects of consciousness and sensory experience.',
    keyTechniques: 'Breath awareness, sensory focus (sound, taste), visualization (light, space), states of being (sleep, emotions), action-oriented practices.',
    primaryGoal: 'Self-realization, overcoming suffering, attaining enduring peace and joy.'
  },
  {
    approach: 'Chakrasmaraka (Inferred)',
    primaryFocus: 'Chakra awareness, remembrance, and activation.',
    keyTechniques: 'Visualizing energy moving through chakras, focusing on specific chakra locations, mantra chanting for chakras, visualizing chakra colors/symbols.',
    primaryGoal: 'Kundalini awakening, spiritual evolution, realizing Shiva consciousness, union of Shiva-Shakti.'
  },
  {
    approach: 'Other Shiva Meditations',
    primaryFocus: 'Aphoristic insights on consciousness, specific yogic practices, ritualistic practices relevant to contexts/epochs.',
    keyTechniques: 'Contemplating aphorisms on the nature of reality, focused gazing (Trataka), specific ritual practices, deity meditation.',
    primaryGoal: 'Understanding the true nature of reality, spiritual liberation, enhancing concentration, divine communion.'
  }
]; 