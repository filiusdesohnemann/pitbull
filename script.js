const fakten = [
  "Die Rasse geht auf Lord Tweedmouth zurück, der sie ab 1865 auf seinem Landgut in Schottland züchtete.",
  "Das Fell ist wasserabweisend, deshalb schwimmen viele Goldens sehr gern.",
  "Golden Retriever tragen Gegenstände gern im Maul, oft auch ihre Lieblingsspielzeuge.",
  "Die Fellfarbe reicht von hellcreme bis dunkelgold.",
  "Der Haarwechsel ist stark. Regelmäßiges Bürsten hilft.",
  "Die Rasse ist anfällig für Hüftgelenksdysplasie. Seriöse Züchter lassen die Elterntiere untersuchen.",
  "Goldens werden oft als Blindenführ- und Therapiehunde eingesetzt."
];

const text = document.getElementById("fakt");
const knopf = document.getElementById("knopf");
let letzter = -1;

knopf.addEventListener("click", function () {
  let i;
  do {
    i = Math.floor(Math.random() * fakten.length);
  } while (i === letzter);
  letzter = i;
  text.textContent = fakten[i];
});