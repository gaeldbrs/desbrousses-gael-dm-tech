function inversement(lettre) {

  var lettres = "";

  for (var i = lettre.length - 1; i >= 0; i--) {

      lettres += lettre[i];
  }
  return lettres ;
}
console.log(inversement('Gaël Desbrousses'));
