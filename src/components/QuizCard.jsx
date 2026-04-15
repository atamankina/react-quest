import { useEffect, useState } from "react"

export default function QuizCard({ 
    questionData, 
    onNextQuestion,
    isLastQuestion
 }) {
    
    const [hasAnswered, setHasAnswered] = useState(false)
    const [selectedAnswer, setSelectedAnswer] = useState(null)

    useEffect(() => {
        setHasAnswered(false),
        setSelectedAnswer(null)
    }, [questionData.id])

    function handleAnswerClick(option) {
        if (hasAnswered) return

        setSelectedAnswer(option)
        setHasAnswered(true)

        const isCorrect = option === questionData.correctAnswer
    }

    function getButtonClasses(option) {
        const baseClasses = "rounded-2xl border px-4 py-3 text-left transition"

        if (!hasAnswered) {
            return `${baseClasses} border-white/10 bg-slate-900/70 text-slate-200 hover:border-violet-300/40 hover:bg-slate-900`
        }

        if (option === questionData.correctAnswer) {
            return `${baseClasses} border-emerald-400/40 bg-emerald-400/10 text-emerald-200`
        }

        if (option === selectedAnswer) {
            return `${baseClasses} border-rose-400/40 bg-rose-400/10 text-rose-200`
        }

        return `${baseClasses} border-white/10 bg-slate-900/40 text-slate-400`
    }
   
    return (
        <aside className="rounded-3xl border border-violet-400/20 bg-violet-400/10 p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-violet-300">
                Mini-Quiz
            </p>

            <h2 className="mt-2 text-xl font-bold text-white">
                {questionData.question}
            </h2>

            <div className="mt-5 grid gap-3">
                {questionData.options.map((option) => (
                    <button 
                        key={option}
                        onClick={() => handleAnswerClick(option)}
                        className={getButtonClasses(option)}
                    >
                        {option}
                    </button>
                ))}
            </div>

            { hasAnswered && !isLastQuestion && (    
                <button
                    onClick={onNextQuestion}
                    className="mt-5 rounded-2xl bg-white px-4 py-3 font-medium text-slate-950 transition hover:bg-slate-200"
                >
                    Nächste Frage
                </button>
            )}
        </aside>
    )
}