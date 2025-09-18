# giorno 5 es 3
def trova_valore_massimo(arr):
  if not arr:
    return None

  val_max = arr[0]
  for elemento in arr:
    if elemento > val_max:
      val_max = elemento
  return val_max

my_array = [25, 8, 42, 13]
valore_massimo = trova_valore_massimo(my_array)

if valore_massimo is not None:
  print(f"Il valore massimo nell'array è: {valore_massimo}")
else:
  print("L'array è vuoto.")