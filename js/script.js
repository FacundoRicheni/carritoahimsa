//  let total = 0;
// let opcionMenu = prompt("Elegí un producto: \n1- Aceite. \n2- Crema. \n3- Jabon. \n4- Carrito de compras. \n Escriba x para finalizar.");


// function menuPrincipal(){
//     while (opcionMenu != "x") {
//         switch (opcionMenu) {
//             case "1":
//                 aceite();
//                 break;
//             case "2":
//                 crema();
//                 break;
//             case "3":
//                 jabon();
//                 break;
//             case "4":
//                 mostrarTotal();
//                 break;
//             default:
//                 alert("Elegiste una opcion invalida");
//                 break;
//         }
//         opcionMenu =  prompt("Elegí un producto: \n1- Aceite. \n2- Crema. \n3- Jabon. \n4- Carrito de compras. \n Escriba x para finalizar.");
//     }
// }

// function mostrarTotal (){
//     alert("Tienes  " + total + " productos en tu carrito de compras");
// }

// function crema(){
//     let crema = parseFloat(prompt("Ingresa la cantidad de cremas a comprar"));
//             total = total + crema;
//     alert("se agregó " + crema + " crema/s al carrito de compra");
//     }

// function aceite(){
//     let aceite = parseFloat(prompt("Ingresa la cantidad de aceite de CBD que desea comprar"));
//             total = total + aceite;
//     alert("se agregó " + aceite + " aceite/s de cbd al carrito de compra");
//     }


// function jabon(){
//     let jabon = parseFloat(prompt("Ingresa la cantidad de jabón de CBD a comprar"));
//             total = total + jabon;
//     alert("se agregó " + jabon + " jabón/es al carrito de compra");
//     }



// menuPrincipal();
 
////////////////////////////////////////////////

// let arrayCremas = [{
//         nombre: "Crema de CBD 100 gr",
//         precio: 900
//     },
//     {
//         nombre: "Crema de CBD grande 200 gr",
//         precio: 1500
//     },
// ];

// let arrayAceites = [{
//         nombre: "Aceite de CBD 20 mlts",
//         precio: 2300
//     },
//     {
//         nombre: "Aceite de CBD 100 mlts",
//         precio: 8500
//     },
// ];

// let arrayJabon = [{
//     nombre: "Jabon de CBD x3 unidades",
//     precio: 700
// }, ];



// function mostrarCremas() {
//     prompt(arrayCremas[0].nombre + " $" + arrayCremas[0].precio + "\n" + arrayCremas[1].nombre + " $" + arrayCremas[1].precio)
// }

// function mostrarJabon() {
//     prompt(arrayJabon[0].nombre + " $" + arrayJabon[0].precio)
// }

// let mostrarAceites = prompt("Elegí un producto: \n1-" + arrayAceites[0].nombre + " $" + arrayAceites[0].precio + "\n2-" + arrayAceites[1].nombre + " $" + arrayAceites[1].precio);

// mostrarJabon();




function myFunction() {
    document.getElementById("demo").innerHTML = "Crema de cannabis";
    alert("Agregaste una crema de Cannabis")
  }

  function myFunction2() {
  document.getElementById("demo2").innerHTML = "Aceite de cannabis";
  alert("Agregaste un Aceite de Cannabis")
}

function myFunction3() {
    document.getElementById("demo3").innerHTML = "Jabon de cannabis";
    alert("Agregaste Jabon de Cannabis x3 unidades")
  }

  let contador = 0;

  const valor = document.querySelector