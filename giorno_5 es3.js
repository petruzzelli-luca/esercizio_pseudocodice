function trovaValoreMassimo(arr) {
  if (arr.length === 0) {
    return null;
  }

  let valMax = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > valMax) {
      valMax = arr[i];
    }
  }
  return valMax;
}

const my_array = [25, 8, 42, 13];
const valoreMassimo = trovaValoreMassimo(my_array);

if (valoreMassimo !== null) {
  console.log(`Il valore massimo nell'array è: ${valoreMassimo}`);
} else {
  console.log("L'array è vuoto.");
}