import LessonCard from "./LessonCard"

export default function LessonList({ lessons }) {
  return (
    <section className="space-y-4">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
            Lerninhalte
          </p>
          <h2 className="text-2xl font-bold text-white">
            React-Themen für unseren MVP
          </h2>
        </div>

        <p className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
          {lessons.length} Einträge
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {lessons.map((lesson) => (
          <LessonCard
            key={lesson.id}
            title={lesson.title}
            topic={lesson.topic}
            type={lesson.type}
            level={lesson.level}
            content={lesson.content}
          />
        ))}
      </div>
    </section>
  )
}