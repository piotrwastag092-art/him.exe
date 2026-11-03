// Generator komplementów (wersja bardzo subiektywna)

const compliments = [
  "Masz najładniejszy uśmiech jaki widziałam",
  "Twój sposób bycia mnie rozbraja",
  "Jesteś niemożliwie fajny",
  "Lubię jak się śmiejesz z własnych głupot",
  "Jesteś moim ulubionym człowiekiem",
  "Przy Tobie wszystko jest po prostu lepsze",
  "Masz coś w sobie czego nie da się opisać, a bardzo próbuję"
];

function generateCompliment() {
  const random = compliments[Math.floor(Math.random() * compliments.length)];
  console.log("Komplement:", random);
  return random;
}

module.exports = { generateCompliment };
