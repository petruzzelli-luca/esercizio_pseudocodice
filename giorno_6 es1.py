#giorno 6 es1
try:
  A = int(input("Inserisci il valore per A: "))
  B = int(input("Inserisci il valore per B: "))

  print(f"Valore iniziale di A: {A}")
  print(f"Valore iniziale di B: {B}")

  A = A + B
  B = A - B
  A = A - B

  print("---")
  print("Dopo lo scambio:")
  print(f"Valore finale di A: {A}")
  print(f"Valore finale di B: {B}")
  
except ValueError:
  print("Input non valido. Assicurati di inserire solo numeri interi.")