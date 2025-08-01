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

const muestraListaVinos = () => {
     let todosLosVinos = listaDeVinos.reduce((concatena, elementoArray) => {
        return (concatena += '#' + elementoArray.id
                + ' - ' + elementoArray.color
                + ' - ' + elementoArray.tipo
                + ' - ' + elementoArray.nombre
                + ' [' + elementoArray.anio
                + '] - $' + elementoArray.precio
                + '\n'
                )
    }, "Los vinos que tenemos actualmente son: \n")
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
    
    console.log(Carrito)
}

const muestraMenuVinos = () => {
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
            muestraListaVinos()
            break;
        case 2:
            seleccionaVinos()
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
