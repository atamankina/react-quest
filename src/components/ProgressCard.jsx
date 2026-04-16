export default function ProgressCard({ score, answeredCount, totalQuestions }) {
  return (
    <aside className="rounded-3xl border border-emerald-400/20 bg-emerald-400/10 p-6">
      <p className="text-sm uppercase tracking-[0.2em] text-emerald-300">
        Fortschritt
      </p>

      <h2 className="mt-2 text-xl font-bold text-white">
        {score} von {totalQuestions} Punkten
      </h2>

      <p className="mt-3 text-slate-200">
        Bereits beantwortet: {answeredCount} von {totalQuestions}
      </p>

      <div className="mt-4 h-3 overflow-hidden rounded-full bg-slate-900/60">
        <div
          className="h-full rounded-full bg-emerald-400 transition-all"
          style={{ width: `${(answeredCount / totalQuestions) * 100}%` }}
        />
      </div>
    </aside>
  )
}