/**
 *
 *
Crea un array di oggetti che rappresentino delle persone.
Ogni persona ha un nome, un cognome e un'età.

Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l'indicazione se può guidare, in base all'età.
*/

const persons = [
   {
      nome : 'Riccardo',
      cognome : 'Petricca',
      anni : 28,
   },
   {
      nome : 'Matteo',
      cognome : 'Anselmo',
      anni : 25,
   },
   {
      nome : 'Pipino',
      cognome : 'Il breve',
      anni : 1254,
   },
   {
      nome : 'Leonardo',
      cognome : 'Mazzanti',
      anni : 7,
   },
   {
      nome : 'Venere',
      cognome : 'Mazzanti',
      anni : 3,
   }
];

console.table(persons);

const personsCanDrive = persons.map(element => {
   let drivingAgeStatement = (element.anni >= 18) ? 'può guidare'  : 'non può guidare' ;
   return `${element.nome}, ${element.cognome} , ${drivingAgeStatement}`;
})

console.table(personsCanDrive);