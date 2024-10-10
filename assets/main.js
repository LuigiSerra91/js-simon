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


//creazione numeri randomici
function randomicNumber (){
    const randomNumberEl = Math.floor((Math.random() * 10) + 1);
    const randomNumberEl2 = Math.floor((Math.random() * 10) + 1);
    const randomNumberEl3 = Math.floor((Math.random() * 10) + 1);
    const randomNumberEl4 = Math.floor((Math.random() * 10) + 1);
    const randomNumberEl5 = Math.floor((Math.random() * 10) + 1);
    document.getElementById('casual-number').innerHTML = randomNumberEl;
    document.getElementById('casual-number-2').innerHTML = randomNumberEl2;
    document.getElementById('casual-number-3').innerHTML = randomNumberEl3;
    document.getElementById('casual-number-4').innerHTML = randomNumberEl4;
    document.getElementById('casual-number-5').innerHTML = randomNumberEl5;

}

randomicNumber()