// Utilizzando const e/o let. Inserire un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.

//con let(quello più appropriato )
let num=parseInt(prompt("Inserire numero:"));

if(num%2==0){
    console.log("il numero è pari: "+num);
}
else{
  num=num+1;
  console.log("il numero è dispari: "+(num));
}

// con const

// const num=parseInt(prompt("Inserire numero:"));

// if(num%2==0){
//     console.log("il numero è pari: "+num);
// }
// else{
  
//   console.log("il numero è dispari: "+(num+1));
// }



