console.log('its works');


/* 
Descrizione:
Visualizzare in pagina 5 numeri casuali.
Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/

/* 
Consigli del giorno:
Pensate prima in italiano.
Dividete in piccoli problemi la consegna.
Individuate gli elementi di cui avete bisogno per realizzare il programma.
Immaginate la logica come fosse uno snack: "Dati 2 array di numeri, indica quali e quanti numeri ci sono in comune tra i due array"
*/
const progressTime = document.getElementById('timer')
const numberContainer = document.getElementById("casual-number")
const secondsEl = 30;
const numbers = []
const inputFormEl = document.getElementById('inputForm')
//creazione numeri randomici
function generateRandomNumber() {
    let numbers = [];
    for (let i = 0; i < 5; i++) { 
        numbers.push(Math.floor(Math.random()*100)+1);        
    }
    
    numberContainer.innerHTML = numbers
    console.log(numbers);
}
generateRandomNumber()
//come far sparire i numeri dopo 30 secondi?e mettere gli input


function countdown(start) {
    let count = start;
    
    const interval = setInterval(() => {

        console.log(count);
        count--;
        progressTime.innerHTML = count
        if (count <= 0) {
            clearInterval(interval);
            
            numberContainer.classList.add('d-none');
            inputFormEl.classList.remove('d-none');
            progressTime.innerHTML = 'finito il tempo'
        }
    }, 1000); // Intervallo di 1000 millisecondi (1 secondo)
}

// Chiamata alla funzione con il valore di partenza 30
countdown(30,);