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

///////////////// PRODUCTOS DEL ARRAY /////////////////

let crema = arrayProductos[0];
let aceite = arrayProductos[1];
let jabon = arrayProductos[2];

const arrayCarrito = [];

////////////////PRECIOS DEL ARRAY/////////////////////

const precioCrema = document.getElementById("precioCrema");
precioCrema.textContent = "$" + arrayProductos[0].precio;

const precioAceite = document.getElementById("precioAceite");
precioAceite.textContent = "$" + arrayProductos[1].precio;

const precioJabon = document.getElementById("precioJabon");
precioJabon.textContent = "$" + arrayProductos[2].precio;


//////////////// ALERTS y AGREGAR PRODUCTOS AL ARRAY CARRITO ///////////////////

document.getElementById('boton').onclick = function(){
    alert("Agregaste " + arrayProductos[0].nombre + " a tu carrito")
    arrayCarrito.push(arrayProductos[0]);
    // const productojson = JSON.stringify(crema);
    // localStorage.setItem("crema", productojson);
};   

document.getElementById('boton2').onclick = function(){
    alert("Agregaste " + arrayProductos[1].nombre + " a tu carrito");
    arrayCarrito.push(arrayProductos[1]);
    // const productojson2 = JSON.stringify(aceite);
    // localStorage.setItem("aceite", productojson2);
};

document.getElementById('boton3').onclick = function(){
    alert("Agregaste: " + arrayProductos[2].nombre + " a tu carrito");
    arrayCarrito.push(arrayProductos[2]);    
    // const productojson3 = JSON.stringify(jabon);
    // localStorage.setItem("jabon", productojson3);
};



///////////////////////////////////////////////////////////////
const guardar = document.getElementById('guardarCarrito');

guardar.onclick = function guardarCarrito(){
    localStorage.setItem("Carrito", JSON.stringify(arrayCarrito));
};



// function vaciarCarrito (){
//     localStorage.clear();
// }

// const vaciarCarrito = document.getElementById("vaciarCarrito");
// vaciarCarrito.onclick = vaciarCarrito();


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