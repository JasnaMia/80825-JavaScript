let etiquetaVar = document.getElementById("texto");
//console.log(etiquetaVar.textContent);
etiquetaVar.textContent = etiquetaVar.textContent + " y modificado";

//console.log("hola");
console.log(etiquetaVar);


// clase 2 - funciones, parametros
let boton2 = document.getElementById("boton_clase2").addEventListener("click", function() {
    let resultado = EjemploFuncion(5, 13);
    console.log(`El resultado de la sumatoria es ${resultado}`)

    console.log(`funcion flecha Ejemplo ${RetornaResultadoFlecha(6,5)}`)

    UsandoCondicionales_Validar();
})

function EjemploFuncion(a, b){
    return a + b;
}

let RetornaResultadoFlecha = (c, d) => {
    return c * d;
}

function UsandoCondicionales_Validar() {
    let numero = prompt("Ingrese un valor");
    while (isNaN(numero)){
        numero = prompt("Ingrese un valor numerico");
    }
    alert("buenisimo que ingresaste un valor valido");
}