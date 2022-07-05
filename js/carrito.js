const elementosCarrito =  JSON.parse(localStorage.getItem("Carrito"));
let miCarrito = document.getElementById("miCarrito");

let productos = [];
productos.push(elementosCarrito);

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
    icon: 'success',
    title: 'Su pedido se realizó con éxito',
    showConfirmButton: false,
    timer: 1500
  })
})

let btnVaciarCarrito = document.getElementById("vaciarCarrito");
btnVaciarCarrito.addEventListener("click",()=>{
  Swal.fire({
    icon: 'error',
    title: 'Su carrito ha sido eliminado',
    showConfirmButton: false,
    timer: 1500
  }
  )
})


