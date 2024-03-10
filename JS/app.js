/*ESERCIZIO: inseriamo tutte le immagini dinamicamente servendoci dell'array fornito 
e un semplice ciclo for che concatena un template literal.
Tutte le immagini saranno nascoste, tranne la prima, 
che avrà una classe specifica che la renderà visibile.*/

//creare array di immagini

const imagesArray = ["01.webp", "02.webp", "03.webp", "04.webp", "05.webp"];
//console.log(imagesArray);

//recuperare elemento slider
const divSliderElement = document.querySelector(".slider");
//console.log(divSliderElement);

//creare elemento div e dargli la classe items-container
const divElementItemsContainer = document.createElement('div');
//console.log(divElementItemsContainer);
divElementItemsContainer.classList.add("items-container");
//console.log(divElementItemsContainer);

//dichiarare totale items come stringa vuota
let itemsContent = " ";

//creare ciclo for che dura la lunghezza dell'array
for(let i = 0; i < imagesArray.length; i++){

    //dichiarare div item tramite template literal ma il collegamento all'immagine è array[i]
    let divItemElement = `<img class="item" src="./img/${imagesArray[i]}"/>`;

    //dichiarare totale items come totale + div item
    itemsContent += divItemElement;

    //chiudere ciclo
}

//inserire totale items in items-container tramite innerHTML
divElementItemsContainer.innerHTML = itemsContent;

//append elemento items-container a elemento slider
divSliderElement.append(divElementItemsContainer);
//console.log(itemsContent);
//console.log(divSliderElement);

//recuperare tutti elementi item con getElementsByClassName -> diventa un simil array
let itemsArray = document.getElementsByClassName("item");
//console.log(itemsArray);

//dichiarare active item = 0
let activeItem = 0;

//dare classe "active" ad active item in indice di elementi item (quindi il primo item)
itemsArray[activeItem].classList.add("active");

//recuperare bottoni prev e next
let nextButtonElement = document.querySelector(".next");
let prevButtonElement = document.querySelector(".prev");

//aggiungere eventListener al click del bottone next:
nextButtonElement.addEventListener ("click", function(){

    //classe active viene rimossa, item active si sposta in avanti di uno, classe active viene rimessa
    itemsArray[activeItem].classList.remove("active");

    activeItem++;

    itemsArray[activeItem].classList.add("active");

})

//aggiungere eventListener al click del bottone prev:
prevButtonElement.addEventListener ("click", function(){

    //stessa cosa eccetto che item active si sposta indietro di uno
    itemsArray[activeItem].classList.remove("active");

    activeItem--;
    
    itemsArray[activeItem].classList.add("active");

})













