import { useState } from 'react'
import Header from './components/Header'
import LessonList from './components/LessonList'
import GoalsCard from './components/GoalsCard'
import QuizCard from './components/QuizCard'
import ProgressCard from './components/ProgressCard'
import { lessons } from './data/lessons'
import { quizQuestions } from './data/quizQuestions'

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [answeredCount, setAnsweredCount] = useState(0)

  function handleNextQuestion() {
    setCurrentQuestionIndex((prev) => prev + 1)
  }

  function handleAnswerChecked(isCorrect) {
    setAnsweredCount((prev) => prev + 1)

    if (isCorrect) {
      setScore((prev) => prev + 1)
    }
  }  

  function handleResetQuiz() {
    setCurrentQuestionIndex(0)
    setScore(0)
    setAnsweredCount(0)
  }

  return (
    <>
      <div className="min-h-screen bg-slate-950 text-slate-100">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-8 sm:px-6 lg:px-8">
          <Header />

          <main className="grid gap-6 lg:grid-cols-[2fr_1fr]">
            <LessonList lessons={lessons} />

            <div className="flex flex-col gap-6">
              <QuizCard 
                questionData={quizQuestions[currentQuestionIndex]}
                onNextQuestion={handleNextQuestion}
                isLastQuestion={currentQuestionIndex === quizQuestions.length - 1} 
                onResetQuiz={handleResetQuiz}
                onAnswerChecked={handleAnswerChecked}
              />
              <ProgressCard 
                score={score}
                answeredCount={answeredCount}
                totalQuestions={quizQuestions.length}
              />
            </div>
          </main>
          
        </div>
      </div>
    </>
  )
}

export default App
