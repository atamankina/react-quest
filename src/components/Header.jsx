export default function Header() {
  return (
    <header className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-slate-950/30 backdrop-blur">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <p className="mb-2 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
            React Frontend MVP
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            ReactQuest
          </h1>
          <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg">
            Lerne React mit kurzen Erklärungen, kleinen Quizzen und klaren Beispielen.
            Heute bauen wir die erste Version unseres Lernprodukts.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-slate-900/60 px-4 py-3">
            <p className="text-sm text-slate-400">Technologien</p>
            <p className="font-semibold text-white">React + Vite + Tailwind</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-900/60 px-4 py-3">
            <p className="text-sm text-slate-400">Heute</p>
            <p className="font-semibold text-white">UI, Komponenten, Mock-Daten</p>
          </div>
        </div>
      </div>
    </header>
  )
}