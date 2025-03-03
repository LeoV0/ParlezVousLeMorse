const latinToMorse = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
};

const morseToLatin = {
  "-": "T",
  "--": "M",
  "---": "O",
  "--.": "G",
  "--.-": "Q",
  "--..": "Z",
  "-.": "N",
  "-.-": "K",
  "-.--": "Y",
  "-.-.": "C",
  "-..": "D",
  "-..-": "X",
  "-...": "B",
  ".": "E",
  ".-": "A",
  ".--": "W",
  ".---": "J",
  ".--.": "P",
  ".-.": "R",
  ".-..": "L",
  "..": "I",
  "..-": "U",
  "..-.": "F",
  "...": "S",
  "...-": "V",
  "....": "H",
};

// ETAPE TEXTE
// Etape 1
function getLatinCharacterList(text) {
  return text.split("");
}

console.log(getLatinCharacterList("Leo"));

// Etape 2
function translateLatinCharacter(lettreToMorse) {
  if (lettreToMorse === " ") {
    return "/"; // Séparateur de mots en Morse
  }
  return latinToMorse[lettreToMorse.toUpperCase()];
}
console.log(translateLatinCharacter("A"));

// Etape 3
function encode(texte) {
  return getLatinCharacterList(texte).map(translateLatinCharacter).join(" "); // Convertit chaque lettre en Morse.join(" ");  /
}

console.log(encode("Salut ça va"));

// // ---------------------------------------------------------------------------

// ETAPE MORSE
// Etape 1
function getMorseCharacterList(morse) {
  return morse.split(" ");
}

// Etape 2
function translateMorseCharacter(morse) {
  if (morse === "/") {
    return " "; // Séparateur de mots en Morse
  }
  return morseToLatin[morse];
}
console.log(translateMorseCharacter(".-"));

// Etape 4
function decode(textToMorse) {
  return getMorseCharacterList(textToMorse)
    .map(translateMorseCharacter)
    .join("");
}
console.log(decode("... .- .-.. ..- - / -.-. .- / ...- .-"));

// Etape 5
// Pour finir cet exercice, utilisez des champs de saisie input en HTML et des boutons pour traduire du texte et du morse dans un sens ou dans l’autre.
