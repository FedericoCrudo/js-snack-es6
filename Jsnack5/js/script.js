// Partendo da un array creiamone uno nuovo con solo i valori che hanno la posizione compresa tra i due numeri inseriti dall'utente
// Usiamo i nuovi metodi degli array foreach o filter
// Esempio:
// const myArray = ['Pippo', 'Pluto', 'Paperino', 'Paperone', 'Paperina', 'Paperoga'];
// Se l’utente inserisce 2 numeri: 1,4 allora selezioniamo 'Pluto', 'Paperino', 'Paperone', 'Paperina'

const array=["Marco","Franco","Lucia","Francesca","Lorenzo"];
const arrayRange=[];
const firstNumber=parseInt(prompt("Inserire il primo numero: ")) ;
const secondNumber=parseInt(prompt("Inserire il secondo  numero: ")) ;
array.forEach((element, index, array) => {
    if(index>=firstNumber &&index<=secondNumber){
      arrayRange.push(element);
    }
  
  });
console.log("Array principale:");
console.log(array);
console.log("hai impostato un range da "+firstNumber+" a "+secondNumber);
console.log(arrayRange);



    
    

