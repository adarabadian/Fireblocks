import React, { useState, useEffect } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  Chip,
  RadioGroup,
  FormControlLabel,
  Radio,
  Collapse,
  LinearProgress,
} from '@mui/material';
import { Quiz, Lightbulb, Refresh } from '@mui/icons-material';
import { glassmorphismCard } from '../../styles/glassmorphism';
import { fadeInAnimation, hoverScale } from '../../styles/animations';
import { getRandomQuestion, getDifficultyColor } from '../../utils/triviaData';
import type { TriviaQuestion } from '../../types/trivia';

const WeatherTrivia: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState<TriviaQuestion | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [questionsAnswered, setQuestionsAnswered] = useState(0);

  // Load initial question
  useEffect(() => {
    setCurrentQuestion(getRandomQuestion());
  }, []);

  const handleAnswerSelect = (answerIndex: number) => {
    if (showAnswer) return; // Prevent changing answer after reveal
    setSelectedAnswer(answerIndex);
  };

  const handleRevealAnswer = () => {
    if (selectedAnswer === null || !currentQuestion) return;
    
    setShowAnswer(true);
    setQuestionsAnswered(prev => prev + 1);
    
    if (selectedAnswer === currentQuestion.correctAnswer) {
      setScore(prev => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    setCurrentQuestion(getRandomQuestion());
    setSelectedAnswer(null);
    setShowAnswer(false);
  };

  const getScorePercentage = () => {
    return questionsAnswered > 0 ? Math.round((score / questionsAnswered) * 100) : 0;
  };

  if (!currentQuestion) return null;

  return (
    <Card
      elevation={0}
      sx={{
        ...glassmorphismCard,
        ...fadeInAnimation,
        ...hoverScale,
        maxWidth: 500,
        mx: 'auto',
        mb: 3,
      }}
    >
      <CardContent sx={{ p: 3 }}>
        {/* Header */}
        <Box display="flex" alignItems="center" justifyContent="space-between" mb={2}>
          <Box display="flex" alignItems="center" gap={1}>
            <Quiz sx={{ color: 'rgba(0, 122, 255, 0.8)', fontSize: '1.5rem' }} />
            <Typography variant="h6" sx={{ fontWeight: 600, color: '#1D1D1F' }}>
              Weather Trivia
            </Typography>
          </Box>
          
          <Chip
            label={currentQuestion.difficulty}
            size="small"
            sx={{
              backgroundColor: getDifficultyColor(currentQuestion.difficulty),
              color: 'white',
              fontWeight: 500,
              textTransform: 'capitalize',
            }}
          />
        </Box>

        {/* Score */}
        {questionsAnswered > 0 && (
          <Box mb={2}>
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
              <Typography variant="body2" sx={{ color: 'rgba(29, 29, 31, 0.7)' }}>
                Score: {score}/{questionsAnswered} ({getScorePercentage()}%)
              </Typography>
            </Box>
            <LinearProgress
              variant="determinate"
              value={getScorePercentage()}
              sx={{
                height: 6,
                borderRadius: 3,
                backgroundColor: 'rgba(0, 122, 255, 0.1)',
                '& .MuiLinearProgress-bar': {
                  backgroundColor: 'rgba(0, 122, 255, 0.8)',
                  borderRadius: 3,
                },
              }}
            />
          </Box>
        )}

        {/* Question */}
        <Typography
          variant="h6"
          sx={{
            mb: 2,
            color: '#1D1D1F',
            fontWeight: 500,
            lineHeight: 1.4,
          }}
        >
          {currentQuestion.question}
        </Typography>

        {/* Options */}
        <RadioGroup
          value={selectedAnswer}
          onChange={(e) => handleAnswerSelect(Number(e.target.value))}
        >
          {currentQuestion.options.map((option, index) => (
            <FormControlLabel
              key={index}
              value={index}
              control={
                <Radio
                  sx={{
                    color: 'rgba(0, 122, 255, 0.6)',
                    '&.Mui-checked': {
                      color: 'rgba(0, 122, 255, 0.8)',
                    },
                  }}
                />
              }
              label={
                <Typography
                  sx={{
                    color: showAnswer
                      ? index === currentQuestion.correctAnswer
                        ? '#4CAF50'
                        : index === selectedAnswer
                        ? '#F44336'
                        : '#1D1D1F'
                      : '#1D1D1F',
                    fontWeight: showAnswer && index === currentQuestion.correctAnswer ? 600 : 400,
                  }}
                >
                  {option}
                </Typography>
              }
              disabled={showAnswer}
              sx={{
                mb: 1,
                p: 1,
                borderRadius: 2,
                backgroundColor: showAnswer
                  ? index === currentQuestion.correctAnswer
                    ? 'rgba(76, 175, 80, 0.1)'
                    : index === selectedAnswer
                    ? 'rgba(244, 67, 54, 0.1)'
                    : 'transparent'
                  : 'transparent',
                transition: 'all 0.2s ease-in-out',
              }}
            />
          ))}
        </RadioGroup>

        {/* Explanation */}
        <Collapse in={showAnswer}>
          <Box
            sx={{
              mt: 2,
              p: 2,
              backgroundColor: 'rgba(0, 122, 255, 0.05)',
              borderRadius: 2,
              border: '1px solid rgba(0, 122, 255, 0.1)',
            }}
          >
            <Box display="flex" alignItems="flex-start" gap={1} mb={1}>
              <Lightbulb sx={{ color: 'rgba(0, 122, 255, 0.8)', fontSize: '1.2rem', mt: 0.1 }} />
              <Typography variant="subtitle2" sx={{ color: 'rgba(0, 122, 255, 0.8)', fontWeight: 600 }}>
                Explanation
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ color: '#1D1D1F', lineHeight: 1.5 }}>
              {currentQuestion.explanation}
            </Typography>
          </Box>
        </Collapse>

        {/* Action Buttons */}
        <Box mt={3} display="flex" gap={2}>
          {!showAnswer ? (
            <Button
              variant="contained"
              onClick={handleRevealAnswer}
              disabled={selectedAnswer === null}
              fullWidth
              sx={{
                backgroundColor: 'rgba(0, 122, 255, 0.8)',
                color: 'white',
                fontWeight: 600,
                borderRadius: 2,
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: 'rgba(0, 122, 255, 1)',
                },
                '&:disabled': {
                  backgroundColor: 'rgba(0, 0, 0, 0.1)',
                  color: 'rgba(0, 0, 0, 0.3)',
                },
              }}
            >
              Reveal Answer
            </Button>
          ) : (
            <Button
              variant="contained"
              onClick={handleNextQuestion}
              startIcon={<Refresh />}
              fullWidth
              sx={{
                backgroundColor: 'rgba(0, 122, 255, 0.8)',
                color: 'white',
                fontWeight: 600,
                borderRadius: 2,
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: 'rgba(0, 122, 255, 1)',
                },
              }}
            >
              Next Question
            </Button>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default WeatherTrivia; 