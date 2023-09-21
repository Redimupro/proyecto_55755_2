alert("Bienvenidos a Creando Espacios");
let continuar = prompt("Desea contratar algún paquete de construcción").toLowerCase().trim();
const carrito = [];
let total;
let mostrar = false;


function confirmacion(continuar) {
    verificacion(continuar);
}

function verificacion(continuar) {
    while(continuar !="si" && continuar != "no") {
        continuar = prompt('ingrese "si" o "no" para continuar').toLowerCase().trim();
    }
    if (continuar == "si") {
        mostrarProductos("Estos son los paquetes disponibles",lista,total,false);
        comprar(lista);
    }
    else if (continuar == "no" && carrito.length != 0){
        mostrar = true;
        mostrarProductos("Estos son los paquetes en su carrito ",carrito, total,true); 
        alert("Gracias por su visita");
    }
    else{
        alert("Gracias por su visita");
    }
}

function comprar(lista) {
    let pedido = prompt("Para comprar ingrese el nombre del Paquete").toLowerCase().trim();
    let mensaje = ("El Paquete no fue encontrado");
    const result = lista.find((ele) => ele.nombre == pedido);
    if (result != undefined  ) {
        carrito.push(new paquete(result.nombre, result.marca, result.precio));
        total = carrito.reduce((acumulador, producto) => acumulador + producto.precio, 0);
        alert("El Paquete fue añadido al carrito");
        continuar = prompt("¿Desea comprar mas?").toLowerCase().trim();
        verificacion(continuar);
    }
    else{
        alert (mensaje);
        continuar = prompt("¿Desea intentar con otro paquete?").toLowerCase().trim();
        verificacion(continuar);
    }
}
confirmacion(continuar);