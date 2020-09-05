//1. GENERO UN ALERT CHE ESPONGA 5 NUMERI CASUALI DIVERSI
var numerocasuale = [];

while(numerocasuale.length < 5){
    var random = Math.floor(Math.random() * 100) + 1;
    if(numerocasuale.indexOf(random) === -1) numerocasuale.push(random);
}
alert("Memorizza i seguenti numeri: " + numerocasuale);
//2. DOPO 30 SECONDI FACCIO COMPARIRE 5 PROMPT IN CUI L'UTENTE DEVE INSERIRE I NUMERI CHE HA VISTO PRECEDENTEMENTE
//3. DOPO AVER INSERITO I 5 NUMERI, IL SOFTWARE DICE QUANTI E QUALI NUMERI SONO STATI RICORDATI

setTimeout (function() {
  var listaNumUtente = [];
  for (var i = 0; i < 5; i++) {
     var numeroUtente = parseInt(prompt("Inserisci uno dei cinque numeri che hai visualizzato"));;
     if(numerocasuale.includes(numeroUtente)) {
      listaNumUtente.push(numeroUtente);
      console.log("Hai memorizzato" + listaNumUtente.length + "numeri");
    } else {
      alert("Non hai ricordato nessun numero");
    }
  }
}, 1000);
