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
 
//////////////////////////////////////////////

let arrayProductos = [
    {
        nombre: "Crema de CBD",
        precio: 900
    },
    {
        nombre: "Aceite de CBD",
        precio: 2300
    },
    {
        nombre: "Jabon de CBD x3 unidades",
        precio:  700
    },
];

//////////////// ALERTS DE AGREGAR PRODUCTOS ///////////////////
const producto = document.getElementById('boton').onclick = function(){
    alert("Agregaste " + arrayProductos[0].nombre + " a tu carrito");
    const productojson = JSON.stringify(crema);
    localStorage.setItem("crema", productojson);
}

document.getElementById('boton2').onclick = function(){
    alert("Agregaste " + arrayProductos[1].nombre + " a tu carrito");
    const producto2json = JSON.stringify(aceite);
    localStorage.setItem("aceite", producto2json)
    }

document.getElementById('boton3').onclick = function(){
    alert("Agregaste: " + arrayProductos[2].nombre + " a tu carrito");
    const producto3json = JSON.stringify(jabon);
    localStorage.setItem("jabon", producto3json)
}

const precioCrema = document.getElementById("precioCrema");
precioCrema.textContent = "$ " + arrayProductos[0].precio;


const precioAceite = document.getElementById("precioAceite");
precioAceite.textContent = "$ " + arrayProductos[1].precio;

const precioJabon = document.getElementById("precioJabon");
precioJabon.textContent = "$ " + arrayProductos[2].precio;



let crema = arrayProductos[0];
let aceite = arrayProductos[1];
let jabon = arrayProductos[2];

let arrayCarrito = [
    {
    }
]







// localStorage.setItem("nombre", "crema");
// localStorage.setItem("precio", 900);

// localStorage.setItem("nombre", "aceite");
// localStorage.setItem("precio", 2300);

// localStorage.setItem("nombre", "jabon");
// localStorage.setItem("precio", 700);



// function guardarDatos(storage){
//     let user = document.getElementById(emailAdress).value;
//     let password = document.getElementById(password).value;
// }

// const usuario = {
//     "user": user,
//     "password": password
// }

// if (storage=== "sessionStorage")
//     sessionStorage.setItem("user",JSON.stringify(usuario))