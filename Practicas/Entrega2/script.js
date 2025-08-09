
let Carrito = [] 
const todosLosProductos = document.querySelector('.todosProductos')
const carritoDOM = document.querySelector('.miCarrito')

const listaDeVinos = [
    {id: 101, nombre: 'Emilia', anio: 2009, precio: 4500, img: "./imagenes/Emilia.png"},
    {id: 102, nombre: 'Portillo', anio: 2000, precio: 5500, img: "./imagenes/portillo.png"},
    {id: 103, nombre: 'Bianchi', anio: 2020, precio: 3500, img: "./imagenes/bianchi.png"},
    {id: 104, nombre: 'Elementos', anio: 2020, precio: 4300, img: "./imagenes/Elementos.png"},
    {id: 201, nombre: 'Benjamin', anio: 2021, precio: 2300, img: "./imagenes/benjamin.png"},
    {id: 301, nombre: 'Trumpeter', anio: 2021, precio: 8500, img: "https://www.lacoopeencasa.coop/media/lcec/publico/articulos/8/f/a/8fa2946b27e46790630ae806dd2d2e58"}
]

const agregaCarritoArreglo = () => {
    const botones = document.querySelectorAll('.agregar-producto')
	const botonArreglo = Array.from(botones)

    botonArreglo.forEach((boton)=> {
        boton.addEventListener('click', e => {
            const seleccionado = e.target.parentElement
            const id = seleccionado.querySelector('h4').textContent
            const buscaId = listaDeVinos.find((elemento) => elemento.id === id)

            console.log('id: ' + id)
            console.log('busca id: ' + buscaId)
            // no me esta encontrando el vino q intento comprar
        })
    })
}

const cargarProductos = () => {
    listaDeVinos.forEach((e) => {
        const contenedorProducto = document.createElement('div') 
        contenedorProducto.classList.add('claseContenedorProducto')
        contenedorProducto.innerHTML = `
                                    <h2>${e.nombre}</h2>
                                    <h4>${e.id}</h4>
                                    <img src= ${e.img}>
                                    <p>${e.precio}</p>
                                    <button class="agregar-producto">Comprar</button>
                                `
        todosLosProductos.append(contenedorProducto) 
        agregaCarritoArreglo()                       
    }) 
}

document.addEventListener('DOMContentLoaded', () => {
	cargarProductos()
})