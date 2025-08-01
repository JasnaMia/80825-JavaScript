const cursos = [
    {
        id: 101,
        instituto: "EducacionIT",
        nombre: "User story",
        tiempo_semanas: 2,
        nivel: "intermedio",
        precio: 40000
    },
    {
        id: 102,
        instituto: "EducacionIT",
        nombre: "Scrum fundamentos",
        tiempo_semanas: 2,
        nivel: "inicial",
        precio: 35000
    },
    {
        id: 103,
        instituto: "EducacionIT",
        nombre: "Product Owner",
        tiempo_semanas: 3,
        nivel: "inicial",
        precio: 55000
    },
    {
        id: 104,
        instituto: "CoderHouse",
        nombre: "JavaScript",
        tiempo_semanas: 12,
        nivel: "inicial",
        precio: 75000
    },
    {
        id: 105,
        instituto: "CoderHouse",
        nombre: "SQL Server",
        tiempo_semanas: 8,
        nivel: "inicial",
        precio: 65000
    },
]

/* 
//--------------------------------------     F O R E A C H     --------------------------------------
// No devuelve nada, se usa para trabajar cosas en cada uno de los elementos
let retornaForEach = cursos.forEach ((elemento) => {
    console.log(elemento)
})

console.log(retornaForEach)


//--------------------------------------     M A P     --------------------------------------
// devuelve TODOS los elementos del array original, se usa para modificar los elementos del array
// aunq tmb cambia el array original, esta funcion se afecta por Referencia

let retornaMap = cursos.map ((elemento) => {
    elemento.tiempo_semanas += 10
    return elemento.tiempo_semanas
})

console.log('nuevo array')
console.log(retornaMap)
console.log('anterior array')
console.log(cursos)


//--------------------------------------     F I N D     --------------------------------------
// esta funcion busca SOLO el primer elemento que coincida con el filtro del array
// en la misma linea se hace el RETURN. Si no encuentra nada devuelve UNDEFINED

let retornaFind = cursos.find ((elemento) => elemento.precio > 50000)
console.log(retornaFind)


//--------------------------------------     F I N D I N D E X    --------------------------------------
// esta funcion busca SOLO la posicion del primer elemento que coincida con el filtro del array
// Si no encuentra nada, devuelve -1

let retornaFindIndex = cursos.findIndex ((elemento) => elemento.precio > 50000)
console.log(retornaFindIndex)


//--------------------------------------     S O M E    --------------------------------------
// esta funcion devuelve un boolean si coincide con el filtro del array
// Si no encuentra nada, devuelve -1

let retornaSome = cursos.some ((elemento) => elemento.precio > 50000)
console.log(retornaSome)


//--------------------------------------     F I L T E R    --------------------------------------
// esta funcion los elementos que coincidan con el filtro del array
// Si no encuentra nada, devuelve -1
// el parametro "e", es el elemento del array que puede tener cualquier nombre

let retornaFilter = cursos.filter ((e) => e.precio > 50000)
console.log(retornaFilter)


//--------------------------------------     R E D U C E   v1     --------------------------------------
// esta funcion permite hacer calculos (acumular, sumar, concatenar texto, etc)
// el primer parametro "acumulador" funciona como tal y arranca con cero, ver el valor despues de "}"
// devuelve un solo valor

let retornaReduce = cursos.reduce ((acumulador, elemento) => {
    return (acumulador += elemento.precio)
}, 0)
console.log(retornaReduce)


//--------------------------------------     R E D U C E   v2     --------------------------------------
// esta funcion permite hacer calculos (concanetador, sumar, concatenar texto, etc)
// el primer parametro "concanetador" funciona como una variable para concatenar y que previamente arranca con un texto, ver el valor despues de "}"

let retornaReduce2 = cursos.reduce ((concanetador, elemento) => {
    return (concanetador += elemento.nombre + '\n')
}, "Esta es una lista de los nombre de los cursos del 2025: \n")
console.log(retornaReduce2)


//--------------------------------------     S O R T     --------------------------------------
// esta funcion permite ordenar, ascendente o descendente (evalua de acuerdo al resultado de esa resta)
// afecta el array

let retornaSort = cursos.sort ((a, b) => a.precio - b.precio)
console.log(retornaSort)
*/

