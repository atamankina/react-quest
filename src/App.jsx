import { useState } from 'react'
import Header from './components/Header'
import LessonList from './components/LessonList'
import GoalsCard from './components/GoalsCard'
import QuizCard from './components/QuizCard'
import { lessons } from './data/lessons'
import { quizQuestions } from './data/quizQuestions'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="min-h-screen bg-slate-950 text-slate-100">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-8 sm:px-6 lg:px-8">
          <Header />

          <main className="grid gap-6 lg:grid-cols-[2fr_1fr]">
            <LessonList lessons={lessons} />

            <div className="flex flex-col gap-6">
              <GoalsCard />
              <QuizCard questionData={quizQuestions[0]} />
            </div>
          </main>
          
        </div>
      </div>
    </>
  )
}

export default App
