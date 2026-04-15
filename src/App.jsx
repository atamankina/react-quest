import { useState } from 'react'
import Header from './components/Header'
import LessonList from './components/LessonList'
import { lessons } from './data/lessons'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="min-h-screen bg-slate-950 text-slate-100">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-8 sm:px-6 lg:px-8">
          <Header />
          <LessonList lessons={lessons} />
        </div>
      </div>
    </>
  )
}

export default App
