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
      guida : '',
   },
   {
      nome : 'Matteo',
      cognome : 'Anselmo',
      anni : 25,
      guida : '',
   },
   {
      nome : 'Pipino',
      cognome : 'Il breve',
      anni : 1254,
      guida : '',
   },
   {
      nome : 'Leonardo',
      cognome : 'Mazzanti',
      anni : 7,
      guida : '',
   },
   {
      nome : 'Venere',
      cognome : 'Mazzanti',
      anni : 3,
      guida : '',
   },
];

console.table(persons);

const personsCanDrive = persons.filter((element) => {
   if(element.anni >= 18){
      element.guida = 'può guidare';

   }else{
      element.guida = 'NON può guidare';
   }
   return true;
})

console.table(personsCanDrive);