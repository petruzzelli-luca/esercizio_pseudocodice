//giorno 5 es 1
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calcolaFattoriale(x) {
  if (x < 0) {
    return "Errore: il fattoriale non è definito per numeri negativi";
  }
  if (x === 0) {
    return 1;
  }
  
  let fattoriale = 1;
  for (let i = 1; i <= x; i++) {
    fattoriale = fattoriale * i;
  }
  
  return fattoriale;
}

rl.question("Inserisci un numero intero per calcolare il fattoriale: ", (input) => {
  const numero = parseInt(input);
  if (isNaN(numero)) {
    console.log("Input non valido. Inserisci solo numeri interi.");
  } else {
    const risultato = calcolaFattoriale(numero);
    console.log(`Il fattoriale di ${numero} è: ${risultato}`);
  }
  rl.close();
});