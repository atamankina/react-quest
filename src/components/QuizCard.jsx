export default function QuizCard({ questionData }) {
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
                        className="rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-left text-slate-200 transition hover:border-violet-300/40 hover:bg-slate-900"
                    >
                        {option}
                    </button>
                ))}
            </div>
        </aside>
    )
}