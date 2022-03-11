
/**
 *
 *
    Crea un array composto da 12 automobili.
    Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

    Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.

    Infine stampa separatamente i 3 array.

 *
 */


const autoMobili = [
    {
        marca : 'Audi',
        modello : 'e-tron GT',
        alimentazione : 'elettrica'
    },
    {
        marca : 'Hyundai',
        modello : 'i30 fastback N',
        alimentazione : 'Benzina'
    },
    {
        marca : 'Bmw',
        modello : '420d',
        alimentazione : 'Diesel'
    },
    {
        marca : 'Citroen',
        modello : 'C4',
        alimentazione : 'Diesel'
    },
    {
        marca : 'Mercedes',
        modello : 'e-coupè',
        alimentazione : 'Benzina'
    },
    {
        marca : 'Alfa-romeo',
        modello : 'Giulia ',
        alimentazione : 'Benzina'
    },
    {
        marca : 'Ferrari',
        modello : 'Italia',
        alimentazione : 'Benzina'
    },
    {
        marca : 'Tesla',
        modello : 'Model-3',
        alimentazione : 'elettrica'
    },
    {
        marca : 'Renoult',
        modello : 'Clio',
        alimentazione : 'Diesel'
    },
    {
        marca : 'Honda',
        modello : 'Civic',
        alimentazione : 'Diesel'
    },
    {
        marca : 'Maserti',
        modello : 'Quattroporte',
        alimentazione : 'Benzina'
    },
    {
        marca : 'Lancia',
        modello : 'Y',
        alimentazione : 'Diesel'
    },

];

console.table(autoMobili);

const gasoline = autoMobili.filter((element) =>{
    if(element.alimentazione == 'Benzina'){
        return true;
    }
});

console.table(gasoline);

const diesel = autoMobili.filter((element) =>{
    if(element.alimentazione == 'Diesel'){
        return true;
    }
});

console.table(diesel);

const electric = autoMobili.filter((element) =>{
    if(element.alimentazione == 'elettrica'){
        return true;
    }
});

console.table(electric);