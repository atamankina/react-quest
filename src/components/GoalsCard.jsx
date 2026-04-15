export default function GoalsCard() {
  return (
    <aside className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
        Heute im Fokus
      </p>
      <h2 className="mt-2 text-xl font-bold text-white">Tag 2 Ziele</h2>

      <ul className="mt-4 space-y-3 text-slate-300">
        <li>Mehrere Karten mit map() rendern</li>
        <li>Interaktives Quiz mit useState bauen</li>
        <li>Antworten auswerten und Feedback anzeigen</li>
        <li>Punktestand und Fortschritt darstellen</li>
      </ul>
    </aside>
  )
}