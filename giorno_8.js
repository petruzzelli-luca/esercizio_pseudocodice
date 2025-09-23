// giorno 8
class Studente {
    constructor(nome, matricola) {
        this.nome = nome;
        this.matricola = matricola;
        this.voti = [];
    }

    aggiungiVoto(voto) {
        this.voti.push(voto);
    }

    calcolaMedia() {
        if (this.voti.length === 0) {
            return 0;
        }
        const somma = this.voti.reduce((acc, curr) => acc + curr, 0);
        return somma / this.voti.length;
    }
}

// Creazione degli studenti
const stud1 = new Studente("Luca", "12375");
const stud2 = new Studente("Mario", "67830");
const stud3 = new Studente("Laura", "35823");

// Aggiunta di voti
stud1.aggiungiVoto(7);
stud2.aggiungiVoto(5);
stud3.aggiungiVoto(6);
stud1.aggiungiVoto(5);
stud2.aggiungiVoto(3);
stud3.aggiungiVoto(9);

// Creazione della lista degli studenti
const listaStudenti = [stud1, stud2, stud3];

// Itera sulla lista e stampa nome e media
listaStudenti.forEach(studente => {
    const nome = studente.nome;
    const media = studente.calcolaMedia();
    console.log(`Nome: ${nome}`);
    console.log(`Media: ${media}`);
});