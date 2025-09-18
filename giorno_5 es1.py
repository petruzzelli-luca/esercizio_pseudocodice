#giorno 5 es 1
def calcola_fattoriale(x):
  if x < 0:
    return "Errore: il fattoriale non è definito per numeri negativi"
  if x == 0:
    return 1
    
  fattoriale = 1
  for i in range(1, x + 1):
    fattoriale = fattoriale * i
  
  return fattoriale

try:
  numero = int(input("Inserisci un numero intero per calcolare il fattoriale: "))
  risultato = calcola_fattoriale(numero)
  print(f"Il fattoriale di {numero} è: {risultato}")
except ValueError:
  print("Input non valido. Inserisci solo numeri interi.")