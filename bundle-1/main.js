/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1

// SBAGLIATO
// function checkAge() {
//     const myAge = 32;
//     const message = '';

//     if (myAge < 18) {
//         message = `Sei troppo giovane! Hai ${myAge} anni!`;
//     } else {
//         message = 'Hai più di 18 anni!';
//     }
// }
// checkAge();

// CORRETTO
// const myAge = 32;
// const ageResult = checkAge();
// console.log(ageResult);

// function checkAge() {
//     let message = '';

//     if (myAge < 18) {
//         message = `Sei troppo giovane! Hai ${myAge} anni!`;
//     } else {
//         message = 'Hai più di 18 anni!';
//     }
//     return message;
// }

// 1. Il codice controlla l'età, se è minore di 18 allora 'Sei minorenne', altrimenti se è maggiore di 18 allora 'sei maggiorenne'
// 2. & 3. (ERRORE 1) la costante "myAge" deve essere dichiarata fuori dalla funzione, altrimenti può essere vista solo all'interno di essa
// (ERRORE 2) message non può essere una costante, altrimenti non è possibile assegnargli una stringa in seguito
// (ERRORE 3) la funzione deve ritornare la stringa 'message'
// (ERRORE 4) la stringa che ritorna la funzione va salvata in una variabile, e la varibile va mostrata almeno in console con console.log, altrimenti se si richiama solo la funzione, questa non mostra niente

// // ESERCIZIO 2
// SBAGLIATO
// function printColorsNumber() {
//     const colors = ['blue', 'red', 'yellow', 'green', 'black'];
//     console.log(`Nella mia palette ci sono ${colors.lenght} colori!`);
// }
// printColorsNumber();

// CORRETTO
const colors = ['blue', 'red', 'yellow', 'green', 'black'];
const colorsNumber = printColorsNumber();
console.log(colorsNumber);

function printColorsNumber() {
    return `Nella mia palette ci sono ${colors.length} colori!`;
}

// 1. la funzione conta quanti colori ci sono nella palette, ossia nell'array
// 2. "colors.lenght" è scritto in modo errato, "colors.length" è scritto in modo giusto
// 3. (ERRORE 1) l'array va dichiarato fuori dalla funzione
//  (ERRORE 2) nella funzione non deve esserci "console.log", ma "return" che ritorna la stringa
// (ERRORE 3) la stringa ritornata dalla funzione va salvata in una variabile che poi sarà mostrata con un "console.log"

// // ESERCIZIO 3
// function addNumbers() {
//     const userNumber = prompt('Inserisci un numero');
//     const total = userNumber + 12;

//     console.log(`Il risultato finale è ${total}`);
// }
// addNumbers();


// // ESERCIZIO 4
// function checkAccess() {
//     const addresses = [
//         'mymail@mail.com',
//         'yourmail@mail.com',
//         'hermail@mail.com',
//         'hismail@mail.com',
//     ];
//     const userEmail = prompt('Inserisci il tuo indirizzo email');

//     let grantAccess = 'false';

//     if (addresses.includes(userEmail)) {
//         grantAccess = 'true';
//     }

//     if (grantAccess === true) {
//         console.log('Accesso consentito!');
//     } else {
//         console.log('Accesso negato!');
//     }
// }
// checkAccess();
