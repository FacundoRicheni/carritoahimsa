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
    swal.fire("Agregaste: " + arrayProductos[0].nombre + " a tu carrito")
    arrayCarrito.push(arrayProductos[0]);
};   

document.getElementById('boton2').onclick = function(){
    swal.fire("Agregaste: " + arrayProductos[1].nombre + " a tu carrito");
    arrayCarrito.push(arrayProductos[1]);
};

document.getElementById('boton3').onclick = function(){
    swal.fire("Agregaste: " + arrayProductos[2].nombre + " a tu carrito");
    arrayCarrito.push(arrayProductos[2]);    
};



///////////////////////////////////////////////////////////////
const guardar = document.getElementById('guardarCarrito');

guardar.onclick = function guardarCarrito(){
    localStorage.setItem("Carrito", JSON.stringify(arrayCarrito));
};


