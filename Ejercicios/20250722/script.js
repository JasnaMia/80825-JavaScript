
// Crea un array de objetos de productos, dentro de las propiedades de sus objetos agrega las siguientes (id, nombre, precio, cantidad, subtotal)
// Puedes crear una Clase para crear objetos de la misma utilizando un constructor
// Crea un método para calcular el subtotal del producto utilizando las propiedades precio y cantidad
// Crea una funcionalidad en la cual puedes agregar el producto creado a un array de objetos el cual pudiera tener el nombre de productos.

class Producto {
    constructor (id, nombre, precio, cantidad) {
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.cantidad = cantidad
        this.subTotal = 0
    }

    calcular(precio, cantidad) {
        let subTotalCalculado = precio * cantidad
        this.subTotal = subTotalCalculado
    }
}

let arrayProducto = []

let idProducto = Number(prompt("Ingrese el Id del producto"))
let nombreProducto = prompt("Ingrese el nombre del producto")
let precioProducto = Number(prompt("Ingrese el precio del producto"))
let cantidadProducto = Number(prompt("Ingrese la cantidad del producto"))

let adicionaProducto = new Producto(idProducto, nombreProducto, precioProducto, cantidadProducto)
adicionaProducto.calcular(precioProducto, cantidadProducto)
arrayProducto.push(adicionaProducto)

console.log(Producto)
console.log(arrayProducto)