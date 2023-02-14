let animal=prompt("digita el nombre del carnivoro herbivoro omnivoro para saber de que se alimentan ");

//CONDICIONAL SIMPLE IF

// if (condition) {
    
// }

// if (a>b) {
//     console.log(`${a} es mayor que ${b}`);
// }

//CONDICIONAL IF ... ELSE
// if (expresión) { 
//     //acciones a realizar en caso positivo 
//     //... 
//  } else { 
//     //acciones a realizar en caso negativo 
//     //... 
//  }

// if (a>b) {
//     console.log(`${a} es mayor ${b}`);
// } else {
//     console.log(`${b} es mayor ${a}`);    
// }


//CONDICIONAL IF ... ELSE IF.. ELSE

// if (edad>=18 && edad<=29 ) {
//     console.log(`Tienes ${edad} años eres mayor, un joven mayor de edad`);
// } 
// else if (edad>=30 && edad<=49 ) {
//     console.log(`Tienes ${edad} años eres mayor, ya tienes experiencia`);
// }else if(edad>=50){
//     console.log(`Tienes ${edad} años eres mayor, ya tienes experiencia y debes cuidarte`);
// }
// else if(edad >1){
//     console.log(`Eres menor de edad tienes ${edad} años, aprovecha el tiempo`);
// }
// else{
//     console.log("Error ingresa nuevamente tu edad");
// }

//CONDICIONAL SWITCH

switch (animal.toLowerCase()) {
    case "carnivoro":
        console.log("Carnívoros: Son animales que se alimentan de carne, cazando su presa para luego comerla. Las garras de los animales carnívoros depredadores son importantes para agarrar a su presa y poder comerla con más facilidad.");
        break;
    case "herbivoro":
        console.log("Herbivoro: Son animales que se alimentan exclusivamente de plantas, pastos, hierbas y vegetales en general. Hay muchos herbívoros que comen huevos y a veces otras proteínas provenientes de animales.");
    case "omnivoro":
    console.log("Omnivoro: Son animales que se alimentan de carne y plantas, por lo tanto son animales que comen toda clase de alimentos, por lo mismo pueden habitar fácilmente en cualquier ambiente.");
    default:
        console.log("ingrese nuevamente una de las opciones");
        break;
}