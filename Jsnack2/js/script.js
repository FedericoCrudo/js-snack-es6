// Utilizzando const e/o let e template literal. Creare due tag div con due id diversi. 
// Un div avrà il testo colorato di rosso mentre l’altro di verde. 
// Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.

const num=[1,2,3,4,5,6,7,8,9,10];

document.getElementById("container").innerHTML=`
  
  <div id="red">
  </div>
  <div id="green">
  </div>



`;


for(var i=0;i<num.length;i++){
  if(num[i]%2==0){
    document.getElementById("green").innerHTML+=num[i];
  }
  else{
    document.getElementById("red").innerHTML+=num[i];
  }
}