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
// function loopToFive() {
//     for (let i = 0, i < 5, i++) {
//         console.log(i);
//     }
// }


// // ESERCIZIO 4 (suggerimento: ci sono 8 errori)
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