
let etiquetaVar = document.getElementById("texto");
//console.log(etiquetaVar.textContent);
etiquetaVar.textContent = etiquetaVar.textContent + " y modificado";

//console.log("hola");
//console.log(etiquetaVar);



let total = 0;
// clase 2 - funciones, parametros
let boton2 = document.getElementById("boton_clase2") 
boton2.addEventListener("click", functionDelBoton2())


// clase 3 - funciones, parametros
let boton3 = document.getElementById("boton_clase3")
boton3.addEventListener("click", functionDelBoton3())


function functionDelBoton3(){
    llamadaMenu();
    while (confirm("Desea seguir comprando?")) {
        llamadaMenu();
    } 
    alert (`El total es ${total}`)
    total = 0;
}

function functionDelBoton2(){
    let CambiamosTexto = document.getElementById('parrafoCambia')
    let resultado = EjemploFuncion(5, 13);
    console.log(`El resultado de la sumatoria es ${resultado}`)
    console.log(`funcion flecha Ejemplo ${RetornaResultadoFlecha(6,5)}`)

    UsandoCondicionales_Validar();
    CambiamosTexto.innerHTML = "click2"
}

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


function llamadaMenu(){
    let producto = Number(prompt("Bienvenidos a la tienda OnLine de Gquil, que desea comprar? \n 1. lapiz $3 \n 2. pluma $4 \n 3. marcador $5 \n 4. tijeras $6"));
    switch (producto){
        case 1:
            total += 3;
            break;
        case 2:
            total += 4;
            break;
        case 3:
            total += 5;
            break;
        case 4:
            total += 6;
            break;
        default:
            alert("No es un producto valido");
            break;
    }
}