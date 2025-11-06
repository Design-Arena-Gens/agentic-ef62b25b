'use client'

import { useState } from 'react'

interface QuizQuestion {
  question: string
  options: string[]
  correct: number
  explanation: string
}

interface QuizProps {
  questions: QuizQuestion[]
  title: string
}

export default function Quiz({ questions, title }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showExplanation, setShowExplanation] = useState(false)
  const [score, setScore] = useState(0)
  const [completed, setCompleted] = useState(false)

  const handleAnswer = (index: number) => {
    if (showExplanation) return
    setSelectedAnswer(index)
    setShowExplanation(true)
    if (index === questions[currentQuestion].correct) {
      setScore(score + 1)
    }
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowExplanation(false)
    } else {
      setCompleted(true)
    }
  }

  const handleRestart = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowExplanation(false)
    setScore(0)
    setCompleted(false)
  }

  if (completed) {
    const percentage = Math.round((score / questions.length) * 100)
    return (
      <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8 my-6 shadow-lg text-center">
        <h3 className="text-3xl font-bold mb-4">🎉 Quiz Complete!</h3>
        <div className="text-6xl mb-4">
          {percentage >= 80 ? '🏆' : percentage >= 60 ? '🎖️' : '📚'}
        </div>
        <p className="text-2xl font-bold text-gray-800 mb-2">
          Your Score: {score} / {questions.length}
        </p>
        <p className="text-xl text-gray-600 mb-6">
          {percentage >= 80 ? 'Excellent work!' : percentage >= 60 ? 'Good job!' : 'Keep practicing!'}
        </p>
        <button
          onClick={handleRestart}
          className="btn-primary"
        >
          Try Again
        </button>
      </div>
    )
  }

  const question = questions[currentQuestion]

  return (
    <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 my-6 shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
        <span className="text-sm font-semibold text-gray-600">
          Question {currentQuestion + 1} / {questions.length}
        </span>
      </div>

      <div className="bg-white rounded-lg p-6 mb-4 shadow">
        <p className="text-lg text-gray-800 mb-6">{question.question}</p>

        <div className="space-y-3">
          {question.options.map((option, index) => {
            let bgColor = 'bg-gray-50 hover:bg-gray-100'
            if (showExplanation) {
              if (index === question.correct) {
                bgColor = 'bg-green-100 border-green-500'
              } else if (index === selectedAnswer) {
                bgColor = 'bg-red-100 border-red-500'
              }
            }

            return (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                disabled={showExplanation}
                className={`w-full text-left p-4 rounded-lg border-2 transition-all ${bgColor} ${
                  showExplanation ? 'cursor-default' : 'cursor-pointer'
                }`}
              >
                <span className="font-semibold">{String.fromCharCode(65 + index)}.</span> {option}
              </button>
            )
          })}
        </div>
      </div>

      {showExplanation && (
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4 rounded">
          <p className="font-semibold text-blue-800 mb-1">💡 Explanation:</p>
          <p className="text-gray-700">{question.explanation}</p>
        </div>
      )}

      {showExplanation && (
        <button
          onClick={handleNext}
          className="btn-primary w-full"
        >
          {currentQuestion < questions.length - 1 ? 'Next Question →' : 'Finish Quiz'}
        </button>
      )}
    </div>
  )
}
