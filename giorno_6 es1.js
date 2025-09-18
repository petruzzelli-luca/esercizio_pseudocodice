//giorno 6 es1
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Inserisci il valore per A: ", (inputA) => {
  const A = parseInt(inputA);
  
  rl.question("Inserisci il valore per B: ", (inputB) => {
    const B = parseInt(inputB);

    if (isNaN(A) || isNaN(B)) {
      console.log("Input non valido. Assicurati di inserire solo numeri.");
    } else {
      console.log(`Valore iniziale di A: ${A}`);
      console.log(`Valore iniziale di B: ${B}`);

      const oldA = A;
      A = A + B;
      B = A - B;
      A = A - B;

      console.log("---");
      console.log("Dopo lo scambio:");
      console.log(`Valore finale di A: ${A}`);
      console.log(`Valore finale di B: ${B}`);
    }
    
    rl.close();
  });
});

