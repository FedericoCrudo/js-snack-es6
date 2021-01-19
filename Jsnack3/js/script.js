// Utilizzando const e/o let. Dare la possibilità di inserire due parole. Verificare se le due parole hanno la stessa lunghezza. 
// Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.


const prima=prompt("Inserire prima parola: ");
const seconda=prompt("Inserire la seconda parola: ");
if(prima.length==seconda.length){
  console.log(prima);
  console.log(seconda);
}
else if(prima.length>seconda.length){
  console.log(prima);
}
else{
  console.log(seconda);
}


    
    

