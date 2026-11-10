const themen = [
  {
    titel: "Geschichte",
    text: "Woher die Rasse kommt und wer sie gezüchtet hat.",
    link: "geschichte.html"
  },
  {
    titel: "Pflege",
    text: "Fell, Bürsten, Baden und Ernährung.",
    link: "pflege.html"
  },
  {
    titel: "Erziehung",
    text: "Wie du einen Welpen gut erziehst und beschäftigst.",
    link: "erziehung.html"
  },
  {
    titel: "Gesundheit",
    text: "Typische Krankheiten und worauf du achten solltest.",
    link: "gesundheit.html"
  }
];

const container = document.getElementById("karten");

themen.forEach(function (t) {
  const a = document.createElement("a");
  a.className = "karte";
  a.href = t.link;
  a.innerHTML = "<h3>" + t.titel + "</h3><p>" + t.text + "</p>";
  container.appendChild(a);
});