import "./styles.css";

// set password length
// copy on click

document.getElementById("app").innerHTML;

document
  .getElementById("generatepw-btn")
  .addEventListener("click", getPasswords, false);

function getPasswords() {
  let pw1 = buildRandomString();
  let pw2 = buildRandomString();
  updateDOM(pw1, pw2);
}

function buildRandomString(length = 15) {
  let s = "";
  for (let i = 0; i < length; i++) {
    s += characters[getRandomIntInclusive()];
  }
  return s;
}

function getRandomIntInclusive(min = 0, max = characters.length - 1) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

function updateDOM(pw1, pw2) {
  document.getElementById("pwfield1-el").value = pw1;
  document.getElementById("pwfield2-el").value = pw2;
  document
    .getElementById("pwfield1-el")
    .addEventListener("click", copyText.bind(null, pw1), false);
  document
    .getElementById("pwfield2-el")
    .addEventListener("click", copyText.bind(null, pw2), false);
}

function copyText(textToCopy) {
  console.log(textToCopy);
  navigator.clipboard.writeText(textToCopy);
}

const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/"
];
