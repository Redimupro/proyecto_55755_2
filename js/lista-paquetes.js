
const lista = [];
lista.push(new paquete("casa convencional", "Tu casa propia", 300000));
lista.push(new paquete("piscinas", "Verano a la vista", 100000));
lista.push(new paquete("cabañas", "Uno con la naturaleza", 150000));
lista.push(new paquete("construccion en seco", "Rapidez y confort", 78099));
lista.push(new paquete("domotica", "El futuro al alcance de tu mano", 85000));
lista.push(new paquete("casa convencional 2", "Negocio a la vista", 90000));

function mostrarProductos(mensaje,lista, total,mostrar) {
    const misProductos = lista.map((productos) =>  (`${productos.nombre} $${productos.precio}`));
    if(mostrar)
        alert(`${mensaje}:\n${misProductos.join("\n")}\nTotal: $${total}`)
    else
        alert(`${mensaje}:\n${misProductos.join("\n")}`)

}