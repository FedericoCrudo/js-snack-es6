// Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal.

const bici=[
  {
    "nome":"Bike",
    "peso":80,
  },
  {
    "nome":"Bike",
    "peso":68,
  },
  {
    "nome":"Bike",
    "peso":40,
  },
  {
    "nome":"SuperBike",
    "peso":35,
  }
];
const [primaBici, secondaBici,terzaBici,quartaBici] =bici;
 let min=primaBici.peso;
 let esito;
bici.forEach((element,index,array)=>{
  console.log(element);
  if(element.peso<min){
    min=element.peso;
    esito=element.nome+" è la piu leggera, con un peso di : "+element.peso;
  }
  
});
//template literal
document.getElementById("container").innerHTML=`
 

  <h1>${esito}</h1>


`;




    
    

