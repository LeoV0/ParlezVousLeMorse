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

let inputText = document.querySelector("#textConverter");
let buttonText = document.querySelector("#textChecked");

let inputMorse = document.querySelector("#morseConverter");
let buttonMorse = document.querySelector("#morseChecked");

// ETAPE TEXTE
// Etape 1
function getLatinCharacterList(text) {
  return text.split("");
}

console.log(getLatinCharacterList("Leo"));

// Etape 2
function translateLatinCharacter(lettreToMorse) {
  if (lettreToMorse === " ") {
    return "/";
  }
  const upperCaseLetter = lettreToMorse.toUpperCase();
  return latinToMorse[upperCaseLetter];
}
console.log(translateLatinCharacter("A"));

// Etape 3
function encode(texte) {
  return getLatinCharacterList(texte).map(translateLatinCharacter).join(" ");
}

console.log(encode("Salut ça va"));

buttonText.addEventListener("click", () => {
  inputMorse.innerHTML = "";
  let affichageInputMorse = encode(inputText.value);
  inputMorse.value = affichageInputMorse;
});

inputText.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    buttonText.click();
  }
});

// // ---------------------------------------------------------------------------

// ETAPE MORSE
// Etape 1
function getMorseCharacterList(morse) {
  return morse.split(" ");
}

// Etape 2
function translateMorseCharacter(morse) {
  if (morse === "/") {
    return " ";
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

buttonMorse.addEventListener("click", () => {
  inputText.innerHTML = "";
  let affichageInputText = decode(inputMorse.value);
  inputText.value = affichageInputText;
});

inputMorse.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    buttonMorse.click();
  }
});
