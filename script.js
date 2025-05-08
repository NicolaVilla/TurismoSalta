function comprarProducto(nombreProducto,Precio){
    let cantidad=prompt("Cuantas " + nombreProducto + " desea comprar");
    let total = parseInt(cantidad)*Precio;

    if(!isNaN(total) && total>0){
        alert("el monto total a pagar es " + total);
    } else{
        alert("Ingrese una cantidad valida!");
    }


}