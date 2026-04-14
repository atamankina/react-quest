export default function LessonCard({ title, topic, type, level, content }) {
  return (
    <article className="group rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-lg shadow-slate-950/20 transition hover:-translate-y-1 hover:border-cyan-400/30">
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-300 ring-1 ring-inset ring-cyan-400/20">
          {topic}
        </span>
        <span className="rounded-full bg-violet-400/10 px-3 py-1 text-xs font-medium text-violet-300 ring-1 ring-inset ring-violet-400/20">
          {type}
        </span>
        <span className="rounded-full bg-amber-400/10 px-3 py-1 text-xs font-medium text-amber-300 ring-1 ring-inset ring-amber-400/20">
          {level}
        </span>
      </div>

      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="mt-3 leading-7 text-slate-300">{content}</p>
    </article>
  )
}