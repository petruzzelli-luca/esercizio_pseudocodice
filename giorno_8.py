#giorno 8
class Studente:
    def __init__(self, nome, matricola):
        self.nome = nome
        self.matricola = matricola
        self.voti = []

    def aggiungi_voto(self, voto):
        self.voti.append(voto)

    def calcola_media(self):
        if not self.voti:
            return 0
        return sum(self.voti) / len(self.voti)

# Creazione degli studenti
stud1 = Studente("Luca", "12375")
stud2 = Studente("Mario", "67830")
stud3 = Studente("Laura", "35823")

# Aggiunta di voti
stud1.aggiungi_voto(7)
stud2.aggiungi_voto(5)
stud3.aggiungi_voto(6)
stud1.aggiungi_voto(5)
stud2.aggiungi_voto(3)
stud3.aggiungi_voto(9)

# Creazione della lista degli studenti
lista_studenti = [stud1, stud2, stud3]

# Itera sulla lista e stampa nome e media
for studente in lista_studenti:
    nome = studente.nome
    media = studente.calcola_media()
    print(f"Nome: {nome}")
    print(f"Media: {media}")