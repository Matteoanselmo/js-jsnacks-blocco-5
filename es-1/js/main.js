/**
    Creare un oggetto che rappresenti un giocatore di basket, con le seguenti proprietà:
    Codice giocatore, Nome, Cognome, Età,  Media punti fatti per partita, Percentuale di successo per tiri da 3 punti

    Generare casualmente le statistiche di gioco, secondo queste regole:

    A - il codice giocatore deve essere formato da 3 lettere maiuscole casuali e 3 cifre casuali

    B - la media punti fatti per partita deve essere compresa tra 0 e 50
    
    C - la percentuale di successo per da 3 punti deve essere compresa tra 0 e 100
 */

const gamer = {
    'codice-giocatore' : '',
    name : 'Super Mario',
    age : 28,
    'media-per-partita' : '',
    'percentuale-di-successo' : '',
};


console.log(gamer);


const newGamerCard = '';

gamer['codice-giocatore'] = 'HEY' + parseInt(Math.random() * 10) + parseInt(Math.random() * 10) + parseInt(Math.random() * 10);
gamer['percentuale-di-successo'] = parseInt(Math.random() * 100) + '%';
console.log(gamer);

