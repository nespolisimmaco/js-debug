/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1

// SBAGLIATO
// for (let i = 0; i > 5; i++) {
//     console.log(i);
// }

// CORRETTO
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// 1. il for loop stampa gli indici da 1 a 5
// 2. l'errore è "i > 5", poiché il loop va da 0 a 4 e quindi "i < 5"

// ESERCIZIO 2
// SBAGLIATO

// function addIfEven(num) {
//     if (num % 2 = 0) {
//         return num + 5;
//     }
//     return num;
// }

// CORRETTO
function addIfEven(num) {
    if (num % 2 === 0) {
        return num + 5;
    }
    return num;
}
const number = addIfEven(10);
console.log(number);

// 1. la funzione somma 5 al numero passato come parametro della funzione se questo è pari, e ritorna la somma, altrimenti ritorna il numero
// 2. nella condizione dell'if deve esserci "===" per verificare l'identità, e non "=" che è assegnazione
// 3. il numero ritornato dalla funzione va salvato in una variabile e mostrato in console

// // ESERCIZIO 3
// SBAGLIATO
// function loopToFive() {
//     for (let i = 0, i < 5, i++) {
//         console.log(i);
//     }
// }

// CORRETTO
function loopToFive() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
}
loopToFive();

// 1. la funzione stampa in console gli indici da 0 a 4 del for loop
// 2. al posto delle virgole, all'interno del for dobbiamo inserire dei punto e virgola
// 3. la funzione deve essere richiamata per mostrare il risultato in console


// // ESERCIZIO 4 (suggerimento: ci sono 8 errori)
// SBAGLIATO
// function displayEvenNumbers() {
//     let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
//     let evenNumbers = [];
//     for (let i = 0; i < numbers.length - 1; i++;) {
//         if (numbers % 2 = 0); {
//             evenNumbers.push(i);
//         }
//         return evenNumbers;
//     }
// }
// displayEvenNumbers(); // [2,4,6,8]

// CORRETTO
function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            evenNumbers.push(numbers[i]);
        }
    }
    return evenNumbers;
}
const result = displayEvenNumbers(); // [2,4,6,8]
console.log(result);

// 1. la funzione mette nell'array evenNumbers i numeri pari e ritorna l'array
// 2. (ERRORE 1) non occorre il ; alla fine del for loop
// (ERRORE 2) non occorre il ; alla fine della condizione dell'if
// (ERRORE 3) non occorre aggiungere -1 al numbers.length all'interno del for loop
// (ERRORE 4) nella condizione dell'if occorre inserire numbers[i] il quale è il numero dell'array numbers nella posizione i
// (ERRORE 5) nell'array evenNumbers bisogna pushare numbers[i], ossia l'eventuale numero pari, e non l'indice i
// (ERRORE 6) il return va fuori dal for loop
// (ERRROE 7) all'interno della condizione dell'if per confrontare i due numeri occorre mettere === (identità), e non = (assegnazione)
// (ERRORE 8) per stampare il risultato dobbiamo inserire l'array all'interno di una variabile e poi utilizzare console.log