"use client";

import React, { useState } from 'react';

interface InteractiveEducationProps {
  title: string;
  content: string;
  quizQuestions: {
    question: string;
    options: string[];
    correctAnswer: number;
  }[];
}

const InteractiveEducation: React.FC<InteractiveEducationProps> = ({
  title,
  content,
  quizQuestions
}) => {
  const [currentQuestion, setCurrentQuestion] = useState<number | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const startQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setQuizCompleted(false);
  };

  const handleAnswerSelect = (answerIndex: number) => {
    if (!isAnswerSubmitted) {
      setSelectedAnswer(answerIndex);
    }
  };

  const submitAnswer = () => {
    if (selectedAnswer === null || currentQuestion === null) return;

    setIsAnswerSubmitted(true);
    
    if (selectedAnswer === quizQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion === null) return;
    
    const nextQuestionIndex = currentQuestion + 1;
    
    if (nextQuestionIndex < quizQuestions.length) {
      setCurrentQuestion(nextQuestionIndex);
      setSelectedAnswer(null);
      setIsAnswerSubmitted(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(null);
    setSelectedAnswer(null);
    setIsAnswerSubmitted(false);
    setScore(0);
    setQuizCompleted(false);
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden p-6">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      
      {currentQuestion === null && !quizCompleted ? (
        <div>
          <div className="prose max-w-none mb-6" dangerouslySetInnerHTML={{ __html: content }} />
          <button 
            onClick={startQuiz}
            className="btn btn-primary"
          >
            Start Quiz
          </button>
        </div>
      ) : quizCompleted ? (
        <div className="text-center py-8">
          <h3 className="text-xl font-bold mb-4">Quiz Completed!</h3>
          <p className="text-lg mb-4">Your score: {score} out of {quizQuestions.length}</p>
          <div className="mb-6">
            {score === quizQuestions.length ? (
              <div className="text-earth-green font-bold">Perfect score! Great job!</div>
            ) : score >= quizQuestions.length / 2 ? (
              <div className="text-leaf-green">Good job! You're learning well.</div>
            ) : (
              <div className="text-sunset-orange">Keep learning and try again!</div>
            )}
          </div>
          <button 
            onClick={resetQuiz}
            className="btn btn-primary"
          >
            Restart Quiz
          </button>
        </div>
      ) : (
        <div>
          <div className="mb-6">
            <div className="text-sm mb-2">Question {currentQuestion !== null ? currentQuestion + 1 : 1} of {quizQuestions.length}</div>
            <h3 className="text-xl font-bold mb-4">{currentQuestion !== null ? quizQuestions[currentQuestion].question : ''}</h3>
            
            <div className="space-y-3">
              {currentQuestion !== null && quizQuestions[currentQuestion].options.map((option, index) => (
                <div 
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                    selectedAnswer === index 
                      ? isAnswerSubmitted
                        ? index === quizQuestions[currentQuestion].correctAnswer
                          ? 'bg-green-100 border-green-500'
                          : 'bg-red-100 border-red-500'
                        : 'bg-leaf-green/10 border-leaf-green'
                      : 'hover:bg-gray-50'
                  }`}
                >
                  {option}
                  {isAnswerSubmitted && index === quizQuestions[currentQuestion].correctAnswer && (
                    <span className="ml-2 text-green-500">✓</span>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {!isAnswerSubmitted ? (
            <button 
              onClick={submitAnswer}
              disabled={selectedAnswer === null}
              className={`btn ${selectedAnswer === null ? 'bg-gray-300 cursor-not-allowed' : 'btn-primary'}`}
            >
              Submit Answer
            </button>
          ) : (
            <button 
              onClick={nextQuestion}
              className="btn btn-primary"
            >
              {currentQuestion === quizQuestions.length - 1 ? 'Finish Quiz' : 'Next Question'}
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default InteractiveEducation;
