let gattiTot = 44;
let gattiFila = 6;

let numeroFile = Math.floor(gattiTot / gattiFila);
console.log(Math.floor(numeroFile));


let gattiMancanti = gattiFila - (gattiTot % gattiFila);
console.log(gattiMancanti);

let gattiEsclusi = gattiTot % gattiFila;
console.log(gattiEsclusi);

console.log(`Ci sono ${numeroFile} file di gatti e mancano ${gattiMancanti} gatti per una nuova fila, con un avanzo di ${gattiEsclusi}.`);




