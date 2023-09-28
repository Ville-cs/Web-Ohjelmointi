let readline = require("readline-sync");
let syote = readline.question("Anna merkkijono: ");

function palindromi(str) {
  let toisinpain = "";
  for (let i = str.length - 1; i > -1; i--) {
    toisinpain += str[i];
  }
  if (syote == toisinpain) {
    console.log("On palindromi");
    return true;
  } else {
    console.log("Ei ole palindromi");
    return false;
  }
}
palindromi(syote);
