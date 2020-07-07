var distanza = parseInt(prompt('inserisci distanza che vuoi percorrere in km'));
console.log(distanza);
var costo = distanza * (0,21);
var eta = parseInt(prompt('inserisci la tua età'));
document.getElementById('costo').innerHTML = costo;
