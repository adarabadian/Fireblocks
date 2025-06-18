export interface TriviaQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface TriviaState {
  currentQuestion: TriviaQuestion | null;
  showAnswer: boolean;
  selectedAnswer: number | null;
  score: number;
  questionsAnswered: number;
} 