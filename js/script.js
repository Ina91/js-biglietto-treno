// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65



function miaFunzione(distanza,eta,costo) {
    var distanza = document.getElementById('distanza').value;
    var eta = document.getElementById('age').value;
    var costo;

    if (eta<18) {
        costo = (distanza * 0.21)*0.8;

    }else if (eta>65) {
        costo = (distanza * 0.21)*0.6;
    } else {
        costo = distanza * 0.21;
    }
    document.getElementById('costo').innerHTML = 'costo del biglietto:' + costo + '€';
}
