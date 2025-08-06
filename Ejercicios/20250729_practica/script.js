const listaDeVinos = [
    {id: 101, color: 'tinto', tipo: 'Cabernet', nombre: 'Emilia', anio: 2009, precio: 4500},
    {id: 102, color: 'tinto', tipo: 'Cabernet', nombre: 'Portillo', anio: 2000, precio: 5500},
    {id: 103, color: 'tinto', tipo: 'Malbec', nombre: 'Bianchi', anio: 2020, precio: 3500},
    {id: 104, color: 'tinto', tipo: 'Malbec', nombre: 'Elementos', anio: 2020, precio: 7500},
    {id: 201, color: 'blanco', tipo: 'Malbec', nombre: 'Benjamin', anio: 2021, precio: 8500},
    {id: 202, color: 'blanco', tipo: 'Cabernet', nombre: 'Finca Las Moras', anio: 2018, precio: 4700},
    {id: 203, color: 'blanco', tipo: 'Cabernet', nombre: 'Estancia Mendoza', anio: 2017, precio: 3400},
    {id: 301, color: 'rosa', tipo: 'Syrah', nombre: 'Callia', anio: 2015, precio: 2450},
    {id: 302, color: 'rosa', tipo: 'Syrah', nombre: 'Rosa Di Rosso', anio: 2016, precio: 3450},
    {id: 303, color: 'rosa', tipo: 'Syrah', nombre: 'Alma Mora', anio: 2015, precio: 2450},
    {id: 401, color: 'espumante', tipo: 'Extra brut', nombre: 'Chandon', anio: 2010, precio: 3450},
    {id: 402, color: 'espumante', tipo: 'Champagne', nombre: 'Indomable', anio: 2011, precio: 4800}
]

let Carrito = []

const muestraListaVinos = (arreglo, mensaje) => {
     let todosLosVinos = arreglo.reduce((concatena, elementoArray) => {
        return (concatena += '#' + elementoArray.id
                + ' - ' + elementoArray.color
                + ' - ' + elementoArray.tipo
                + ' - ' + elementoArray.nombre
                + ' [' + elementoArray.anio
                + '] - $' + elementoArray.precio
                + '\n'
                )
    }, mensaje + " \n")
    let total = calculaTotalCarrito(mensaje)
    if (total > 0) {
        todosLosVinos += '\n \n Su total es: ' + total
    }
    alert(todosLosVinos)
}

const validaOpcionSeleccionada = (mensaje) => {
    let escogeOpcion = Number(prompt(mensaje))
    while (isNaN(escogeOpcion)) {
        escogeOpcion = Number(prompt(mensaje))
    }
    return escogeOpcion
}

const seleccionaVinos = () => {
    let cualVino = validaOpcionSeleccionada("Ingrese el codigo del vino a comprar")
    let agregaVino = listaDeVinos.find((elemento) => elemento.id == cualVino)
    if (agregaVino){
        const listaCompra = {... agregaVino}
        Carrito.push(listaCompra) 
    }
    else {
        alert("Codigo no valido")
    }
    console.log(Carrito)
}

const calculaTotalCarrito = (msj) => {
    let valor = 0, total = 0
    console.log(msj)
    console.log(Carrito)
    if (msj = "Su carrito de compras es:") {
        total = Carrito.reduce((acumulador, elemento) => {
            return (acumulador += elemento.precio)
                }, 0)
        console.log('El total es: ' + total)
        valor = total.toFixed(2)        
    } else {
        valor = 0
    }
    return valor
} 

const muestraMenuVinos = () => {
    let seguirComprando = true
    let menu = "Bienvenidos a la tienda de Vinos - EC \n" +
                "1. Lista de Vinos \n" +
                "2. Seleccionar vinos a comprar \n" +
                "3. Ver carrito \n" +
                "4. Pagar \n" +
                "5. Salir"
    
    alert(menu)
    let opcion = validaOpcionSeleccionada("Ingrese la opcion: ")
    switch (opcion) {
        case 1:
            muestraListaVinos(listaDeVinos, "Los vinos que tenemos actualmente son:")
            break;
        case 2:
            seguirComprando = true
            while (seguirComprando) {
                seleccionaVinos()
                seguirComprando = confirm("Desea seguir comprando?")
            }
            muestraMenuVinos()
            break;  
        case 3:
            muestraListaVinos(Carrito, "Su carrito de compras es:")
            break;   
        case 5:
            break;   
        default:
            alert("No es una opcion valida")
            muestraMenuVinos()
            break;
    }
}

muestraMenuVinos()  
