export const quizQuestions = [
  {
    id: "q1",
    question: "Wofür werden Props in React verwendet?",
    options: [
      "Um Pakete mit npm zu installieren",
      "Um Daten von einer Elternkomponente an eine Kindkomponente weiterzugeben",
      "Um CSS-Dateien automatisch zu erzeugen",
      "Um den Browser neu zu starten"
    ],
    correctAnswer:
      "Um Daten von einer Elternkomponente an eine Kindkomponente weiterzugeben",
    explanation:
      "Props sind Eingaben für Komponenten. So können Daten von oben nach unten weitergegeben werden."
  },
  {
    id: "q2",
    question: "Warum ist eine eigene Komponente wie LessonList sinnvoll?",
    options: [
      "Weil React ohne LessonList nicht startet",
      "Weil App sonst zu viele Aufgaben übernimmt",
      "Weil Tailwind nur in LessonList funktioniert",
      "Weil map() nur in separaten Dateien erlaubt ist"
    ],
    correctAnswer:
      "Weil App sonst zu viele Aufgaben übernimmt",
    explanation:
      "Wir teilen Verantwortung auf. App bleibt übersichtlich, LessonList kümmert sich um die Kartenliste."
  },
  {
    id: "q3",
    question: "Was bedeutet lessons[0]?",
    options: [
      "Die Länge des Arrays lessons",
      "Das erste Element im Array lessons",
      "Die erste CSS-Klasse",
      "Die erste Funktion in App.jsx"
    ],
    correctAnswer: "Das erste Element im Array lessons",
    explanation:
      "Mit dem Index 0 greifen wir auf das erste Element eines Arrays zu."
  }
]