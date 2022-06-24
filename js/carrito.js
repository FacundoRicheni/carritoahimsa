const elementosCarrito =  JSON.parse(localStorage.getItem("Carrito"));
let miCarrito = document.getElementById("miCarrito");

let productos = [];
productos.push(elementosCarrito);

// let carritodeCompras = elementosCarrito.map(function(x){
//     miCarrito.innerHTML = (x.nombre + "   $" + x.precio) + (x.nombre + "   $" + x.precio)
// });


// let misProductos = productos.map(function(x){
//     miCarrito.innerHTML = (x[0].nombre + x[0].precio + x[1].nombre + x[1].precio)
// });

// elementosCarrito.forEach(Object =>{
//     document.write(Object.nombre + Object.precio)
// })


addLi();

function addLi() {
    var contenido;
    for (i = 0; i < elementosCarrito.length; i++) {
      var li = document.createElement("li");
      var p = document.createElement("p");
      contenido = "Nombre:" + elementosCarrito[i].nombre + " || Precio: " + elementosCarrito[i].precio;
      p.appendChild(document.createTextNode(contenido));
      document.getElementById("miCarrito").appendChild(li).appendChild(p);
    }
}

console.log(elementosCarrito);

console.log(productos)

let btnFinalizar = document.getElementById("guardarCarrito");
btnFinalizar.addEventListener("click",()=>{
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Su pedido se realizó con éxito',
    showConfirmButton: false,
    timer: 1500
  })
})

let btnVaciarCarrito = document.getElementById("vaciarCarrito");
btnVaciarCarrito.addEventListener("click",()=>{
  Swal.fire({
    position: 'top-end',
    icon: 'error',
    title: 'Su carrito ha sido eliminado',
    showConfirmButton: false,
    timer: 1500
  }
  )
})


