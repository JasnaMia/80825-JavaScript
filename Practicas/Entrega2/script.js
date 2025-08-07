const listaDeVinos = [
    {id: 101, nombre: 'Emilia', anio: 2009, precio: 4500, img: "./imagenes/Emilia.png"},
    {id: 102, nombre: 'Portillo', anio: 2000, precio: 5500, img: "./imagenes/portillo.png"},
    {id: 103, nombre: 'Bianchi', anio: 2020, precio: 3500, img: "./imagenes/bianchi.png"},
    {id: 104, nombre: 'Elementos', anio: 2020, precio: 7500, img: "./imagenes/Elementos.png"},
    {id: 201, nombre: 'Benjamin', anio: 2021, precio: 8500, img: "./imagenes/benjamin.png"},
]

let contenedorDOM = document.getElementById("contenedor")
let nuevoElementoDOM = document.createElement('img')
nuevoElementoDOM.src = listaDeVinos[3].img 
contenedorDOM.appendChild(nuevoElementoDOM)