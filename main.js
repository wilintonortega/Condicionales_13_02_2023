let edad=prompt("digita el numero la edad");


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

if (edad>=18 && edad<=29 ) {
    console.log(`Tienes ${edad} años eres mayor, un joven mayor de edad`);
} 
else if (edad>=30 && edad<=49 ) {
    console.log(`Tienes ${edad} años eres mayor, ya tienes experiencia`);
}else if(edad>=50){
    console.log(`Tienes ${edad} años eres mayor, ya tienes experiencia y debes cuidarte`);
}
else if(edad >1){
    console.log(`Eres menor de edad tienes ${edad} años, aprovecha el tiempo`);
}
else{
    console.log("Error ingresa nuevamente tu edad");
}