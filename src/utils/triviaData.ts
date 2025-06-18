import type { TriviaQuestion } from '../types/trivia';

export const weatherTriviaQuestions: TriviaQuestion[] = [
  {
    id: 'q1',
    question: 'What is the hottest temperature ever recorded on Earth?',
    options: ['134°F (56.7°C)', '142°F (61.1°C)', '128°F (53.3°C)', '150°F (65.6°C)'],
    correctAnswer: 0,
    explanation: 'The highest temperature ever recorded was 134°F (56.7°C) in Death Valley, California on July 10, 1913.',
    difficulty: 'medium'
  },
  {
    id: 'q2',
    question: 'Which cloud type is associated with thunderstorms?',
    options: ['Cirrus', 'Stratus', 'Cumulonimbus', 'Cumulus'],
    correctAnswer: 2,
    explanation: 'Cumulonimbus clouds are towering clouds that can reach extreme heights and are responsible for thunderstorms, heavy rain, and sometimes tornadoes.',
    difficulty: 'easy'
  },
  {
    id: 'q3',
    question: 'What causes the aurora borealis (northern lights)?',
    options: ['Solar wind particles', 'Ice crystals', 'Lightning', 'Moon reflection'],
    correctAnswer: 0,
    explanation: 'The aurora borealis is caused by solar wind particles colliding with gases in Earth\'s magnetosphere, creating beautiful light displays.',
    difficulty: 'medium'
  },
  {
    id: 'q4',
    question: 'How fast can tornado winds reach?',
    options: ['200 mph', '300 mph', '400 mph', '500 mph'],
    correctAnswer: 1,
    explanation: 'The strongest tornadoes (EF5) can have wind speeds exceeding 300 mph (480 km/h), capable of incredible destruction.',
    difficulty: 'hard'
  },
  {
    id: 'q5',
    question: 'What percentage of lightning strikes hit the ground?',
    options: ['50%', '75%', '25%', '90%'],
    correctAnswer: 2,
    explanation: 'Only about 25% of lightning strikes actually reach the ground. Most lightning occurs within clouds or between clouds.',
    difficulty: 'medium'
  },
  {
    id: 'q6',
    question: 'Which planet has the strongest winds in our solar system?',
    options: ['Jupiter', 'Saturn', 'Neptune', 'Venus'],
    correctAnswer: 2,
    explanation: 'Neptune has the strongest winds, reaching speeds of up to 1,200 mph (2,000 km/h) despite being the farthest planet from the Sun.',
    difficulty: 'hard'
  },
  {
    id: 'q7',
    question: 'What is the name for a rotating column of air that doesn\'t touch the ground?',
    options: ['Tornado', 'Funnel cloud', 'Waterspout', 'Dust devil'],
    correctAnswer: 1,
    explanation: 'A funnel cloud is a rotating column of air that extends from a cloud but doesn\'t reach the ground. It becomes a tornado when it touches down.',
    difficulty: 'easy'
  },
  {
    id: 'q8',
    question: 'How many sides does a snowflake typically have?',
    options: ['4', '5', '6', '8'],
    correctAnswer: 2,
    explanation: 'Snowflakes are ice crystals that typically have six sides due to the hexagonal structure of ice molecules.',
    difficulty: 'easy'
  }
];

export const getRandomQuestion = (): TriviaQuestion => {
  const randomIndex = Math.floor(Math.random() * weatherTriviaQuestions.length);
  return weatherTriviaQuestions[randomIndex];
};

export const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case 'easy': return '#4CAF50';
    case 'medium': return '#FF9800';
    case 'hard': return '#F44336';
    default: return '#2196F3';
  }
}; 