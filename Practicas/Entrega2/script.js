
let Carrito = [] 
let contenedorDOM = document.querySelector(".contenedor")

const listaDeVinos = [
    {id: 101, nombre: 'Emilia', anio: 2009, precio: 4500, img: "./imagenes/Emilia.png"},
    {id: 102, nombre: 'Portillo', anio: 2000, precio: 5500, img: "./imagenes/portillo.png"},
    {id: 103, nombre: 'Bianchi', anio: 2020, precio: 3500, img: "./imagenes/bianchi.png"},
    {id: 104, nombre: 'Elementos', anio: 2020, precio: 4300, img: "./imagenes/Elementos.png"},
    {id: 201, nombre: 'Benjamin', anio: 2021, precio: 2300, img: "./imagenes/benjamin.png"},
    {id: 301, nombre: 'Trumpeter', anio: 2021, precio: 8500, img: "https://www.lacoopeencasa.coop/media/lcec/publico/articulos/8/f/a/8fa2946b27e46790630ae806dd2d2e58"}
]


const cargarProductos = () =>
{
    contenedorDOM.innerHTML = ""
    listaDeVinos.forEach(el => {
         contenedorDOM.innerHTML += `<div class="producto">
            <h3>${el.nombre}</h3>
            <img src=${el.img} alt="vino" widht=10 />
            <p>$${el.precio}</p>
            <button class="botonCompra">Comprar</button>
        </div>`  
    })
    agregaAlCarrito()
}

const agregaAlCarrito = () => {
    let botonCompra = document.querySelectorAll(".botonCompra")
    let arreglo = Array.from(botonCompra)

    arreglo.forEach((boton) => {
        boton.addEventListener("click", () => {
            let elemento = document.querySelectorAll(".producto");
            console.log('elementosss: ')
            
            console.log(elemento)
            
        })
    })
    console.log(Carrito)
}


document.addEventListener('DOMContentLoaded', () => {
	cargarProductos()
})