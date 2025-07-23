

const listaDeVinos = [
    {color: 'tinto', tipo: 'Cabernet', nombre: 'Emilia', anio: 2022},
    {color: 'tinto', tipo: 'Cabernet', nombre: 'Portillo', anio: 2020},
    {color: 'tinto', tipo: 'Malbec', nombre: 'Bianchi', anio: 2020},
    {color: 'tinto', tipo: 'Malbec', nombre: 'Elementos', anio: 2020},
    {color: 'blanco', tipo: 'Malbec', nombre: 'Benjamin', anio: 2021},
    {color: 'blanco', tipo: 'Cabernet', nombre: 'Finca Las Moras', anio: 2021},
    {color: 'blanco', tipo: 'Cabernet', nombre: 'Estancia Mendoza', anio: 2021},
    {color: 'rosa', tipo: 'Syrah', nombre: 'Callia', anio: 2021},
    {color: 'rosa', tipo: 'Syrah', nombre: 'Rosa Di Rosso', anio: 2021},
    {color: 'rosa', tipo: 'Syrah', nombre: 'Alma Mora', anio: 2021},
    {color: 'espumante', tipo: 'Extra brut', nombre: 'Chandon', anio: 2021},
    {color: 'espumante', tipo: 'Champagne', nombre: 'Indomable', anio: 2021}
] 

const arrayColor = [
    {opcion: 1, descripcion: 'tinto'},
    {opcion: 2, descripcion: 'blanco'},
    {opcion: 3, descripcion: 'rosa'},
    {opcion: 4, descripcion: 'espumante'}
]

const arrayTipo = [
    {opcion: 1, descripcion: 'Cabernet'},
    {opcion: 2, descripcion: 'Malbec'},
    {opcion: 3, descripcion: 'Syrah'},
    {opcion: 4, descripcion: 'Extra brut'},
    {opcion: 5, descripcion: 'Champagne'}
]

const arrayAnio = [
    {opcion: 1, descripcion: 2020},
    {opcion: 2, descripcion: 2021},
    {opcion: 3, descripcion: 2022}
]

const vinosFiltrarColor = []

function verTodosLosVinos(){
    let vinos = 'Lista de Vinos \n';
    for(i=0; i < listaDeVinos.length; i++) {
        vinos += `${i+1}. tipo: ${listaDeVinos[i].tipo}, nombre: ${listaDeVinos[i].nombre}, descrip: ${listaDeVinos[i].descripcion}, anio: ${listaDeVinos[i].anio} \n`;
    }
    vinos += '\nDesea comprar algunos de estos vinos?, escoge la opcion:'
    
    let opcionVinoComprar = Number(prompt(vinos));
    if (opcionVinoComprar < listaDeVinos.length) {
        alert('Felicitaciones por comprar el vino : ' + listaDeVinos[i+1].nombre + listaDeVinos[i+1].descripcion + listaDeVinos[i+1].anio);
    } else {
        alert('Opcion no valida');
    }  
}

function menu() {
    let opcionMenu = 0;
    let bandera = true;
    while (opcionMenu <= 3 && bandera == true) {
        opcionMenu = Number(prompt('1. Clientes \n2. Salir')); // 1. Clientes \n2. Proveedores \n3. Salir
        if (opcionMenu === 1) {
            mostrarOpcionClientes();
        // } else if (opcionMenu === 2) {
        //     cargaProveedores();
        } else if (opcionMenu === 2) {
            bandera = false;
        } else {
            alert('Digitaste una opcion invalida');
            opcionMenu = 0; // le asigno esta opcion para que se siga mostrando el menu del WHILE
        }   
    }
}

function verPorCategoria(OptionTipoParametro){
    let opcionTipoLocal = OptionTipoParametro;
    let bandera = true, opcionSeleccionada = 0;
    let titulo = '', nombreArreglo = '', listaDatos = '';

    console.log(`Entra a la funcion verPorCategoria, el valor de su parameter es: ${opcionTipoLocal}`);

    // verCategoriaDetallada(verOpcionSeleccionada);
     switch (opcionTipoLocal) {
        case 1:
            titulo = 'Color';
            nombreArreglo = arrayColor;
            break;
        case 2:
            titulo = 'Tipo';
            nombreArreglo = arrayTipo;
            break;
        default:
            alert('Opcion no valida')
            break
        // case 3:
        //     titulo = 'Anio \n';
        //     nombreArreglo = arrayAnio;
        //     break;
    } 

    listaDatos = titulo;
    listaDatos = listaDatos + '\n'
    for(i=0; i < nombreArreglo.length; i++) {
        listaDatos += nombreArreglo[i].opcion + '. ' + nombreArreglo[i].descripcion + '\n';
    }
    
    // agregamos la opcion de "Salir"
    listaDatos +=  `${nombreArreglo.length + 1}. Salirrrrrrrrrrrrrrrrrrrrrrrr `;
    listaDatos += '\n\nSeleccionar: ';

    console.log(`before WHILE opcionSeleccionada: ${opcionSeleccionada}, longitud: ${nombreArreglo.length}, bandera: ${bandera}`);

    while (opcionSeleccionada < nombreArreglo.length + 1 && bandera == true) {
        opcionSeleccionada = Number(prompt(listaDatos));
        console.log(`ENTRO AL WHILE  opcionSeleccionada: ${opcionSeleccionada}, descripcion: ${nombreArreglo[opcionSeleccionada - 1].descripcion}`);
        descrip = nombreArreglo[opcionSeleccionada - 1].descripcion;
        console.log('muestra la descrip: ' + descrip);
        //if (opcionSeleccionada == 1) {
        if (titulo == 'Color') {
            console.log('entro x Categoria del Color');
            verPorTipo(descrip);
            bandera = false;
            
        //     verPorCategoria(1);
        //} else if (opcionSeleccionada == 2) {
        } else if (titulo == 'Tipo') {
            console.log('entro x Categoria del Tipo');
            verPorTipo('');
            bandera = false;
            
        //    mostrarListaFiltrada('');
        // } else if (opcionSeleccionada == 3) {
        //     verPorCategoria(3);
        } else if (opcionSeleccionada == nombreArreglo.length + 1) { 
            console.log('entro x Categoria otra');
            bandera = false;
            
        } else {
            alert('Digitaste una opcion invalida del tipo de vino');
            opcionSeleccionada = 0; // le asigno esta opcion para que se siga mostrando el menu del WHILE
        }   
    }
}

function verPorTipo(nombreColor){
    let opcionTipo = 0;
    let bandera = true;
    let nombreTipo = ''

    let listaTipoVinos = 'Tipos de vinos: \n';
    for(i=0; i < arrayTipo.length; i++) {
        listaTipoVinos += arrayTipo[i].opcion + '. ' + arrayTipo[i].descripcion + '\n';
    }
    listaTipoVinos +=  `${arrayTipo.length + 1}. Salir `;
    listaTipoVinos += '\n\nSeleccionar: ';

    console.log(`antes del WHILE - verPorTipo opcionTipo: ${opcionTipo}, longitud arrayTipo ${arrayTipo.length}, bandera ${bandera}, nombre color ${nombreColor} y su longitud es: ${nombreColor.length}`)

    while (opcionTipo < arrayTipo.length + 1 && bandera == true) {
        opcionTipo = Number(prompt(listaTipoVinos));
        console.log(`entro WHILEeeeeeeeeee del verPorTipo funcion verPorTipo  opcionTipo: ${opcionTipo}, longitud arrayTipo ${arrayTipo.length}`) 
        nombreTipo = arrayTipo[opcionTipo - 1].descripcion; 
        //console.log (listaTipoVinos);
        //console.log ('termino del mostrar el array listaTipoVinos');
        if (opcionTipo <= arrayTipo.length) {
            console.log(`entro al IF nombreColor: ${nombreColor}, nombreTipo: ${nombreTipo}`)
            mostrarListaFiltrada(nombreColor, nombreTipo);
            bandera = false;
            //verPorNombre(opcionTipo);
        } else if (opcionTipo == arrayTipo.length + 1) { 
            bandera = false;
        } else {
            alert('Digitaste una opcion invalida del tipo de vino');
            opcionTipo = 0; // le asigno esta opcion para que se siga mostrando el menu del WHILE
        }   
    }
}

function mostrarListaFiltrada(color, tipo){
    const todosLosVinos = []
    const VinosFiltrados = []
    let seleccionaVino = '', vinoComprar = 0

    console.log(`funcion mostrarListaFiltrada recibe Color: ${color}, Tipo: ${tipo}`);

    if (color.length > 0) {
        for(let i=0; i < listaDeVinos.length; i++) {
            if (listaDeVinos[i].color === color) {
                todosLosVinos.push(listaDeVinos[i]);
            }
        }        
    } else {
        console.log('Entro por el ELSE');
//        todosLosVinos.push(listaDeVinos);
        todosLosVinos = [...listaDeVinos]
    }

    console.log('Entro por el tipo de VINOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO');
    console.log(todosLosVinos);

    console.log(`longitud del array anterior: ${todosLosVinos.length}, tipo: ${todosLosVinos[0].color}, variableTipo: ${tipo}`)
    for(let indice=0; indice < todosLosVinos.length; indice++) {
        console.log('entro al FORRRRRR');
        console.log(`datos : ${todosLosVinos[indice].tipo}, ParametroTipo: ${tipo}, cantidadRegistros: ${todosLosVinos.length}, indice: ${indice}`)
        if (todosLosVinos[indice].tipo === tipo) {
            console.log('entro al IFfffffffffffffffffffffff');
            VinosFiltrados.push(todosLosVinos[indice]);
        }
    }  

    console.log(`lenght del array VinosFiltrados : ${VinosFiltrados.length}`)
    if (VinosFiltrados.length > 0) {
        seleccionaVino = '';
        for(indice2=0; indice2 < VinosFiltrados.length; indice2++) {
            seleccionaVino += (indice2 + 1) + '. ' + VinosFiltrados[indice2].nombre + ', anio ' + VinosFiltrados[indice2].anio + '\n';
        }
        seleccionaVino += '\nSeleccionar: ';
        vinoComprar = prompt(seleccionaVino);
        vinoComprar = vinoComprar - 1;
    }
    else {
        vinoComprar = 0;
    }
    console.log('vinoComprar: ' + vinoComprar);
    console.log(VinosFiltrados);
    confirm(`Felicitaciones por comprar el vino:  ${VinosFiltrados[vinoComprar].nombre} anio  ${VinosFiltrados[vinoComprar].anio}`);
}

function mostrarOpcionClientes() {
    let opcionListaVinos = Number(prompt('Comprar VINOS - busqueda por sigt categorias: \n1. Color \n2. Tipo \n3. Menu anterior'))
    switch (opcionListaVinos) {
        case 1:
            verPorCategoria(1);
            break;
        case 2:
            //verPorCategoria(2);
            verPorTipo('');
        //     break;
        // case 3:
        //     verPorCategoria(3);
        //     break;
        case 3:
            verMenuAnterior();
            break;
        default:
            alert('Elegiste opcion no valida');
            break;
    }
}

menu();

/* function verPorNombre() {
    let opcionNombre = 0;
    let bandera = true;

    let listaxNombre = 'Por nombre: \n';
    for(i=0; i < nombreVino.length; i++) {
        listaxNombre += nombreVino[i].opcion + '. ' + nombreVino[i].nombre + '\n';
    }
    listaxNombre +=  `${nombreVino.length + 1} . Salir `;
    listaxNombre += '\n\nSeleccionar: ';

    while (opcionNombre < nombreVino.length + 1 && bandera == true) {
        opcionNombre = Number(prompt(listaxNombre));
        if (opcionNombre < nombreVino.length) {
            verPorAnio(opcionNombre);
        } else if (opcionNombre == opcionNombre.length + 1) { 
            bandera = false;
        } else {
            alert('Digitaste una opcion invalida del anio de vino');
            opcionNombre = 0; // le asigno esta opcion para que se siga mostrando el menu del WHILE
        }   
    }
} */

/* function verPorAnio() {
    let opcionAnio = 0;
    let bandera = true;

    let listaxAnio = 'Por anio: \n';
    for(i=0; i < anioVino.length; i++) {
        listaxAnio += anioVino[i].opcion + '. ' + anioVino[i].anio + '\n';
    }
    listaxAnio +=  `${anioVino.length + 1} . Salir `;
    listaxAnio += '\n\nSeleccionar: ';

    while (opcionAnio < anioVino.length + 1 && bandera == true) {
        opcionAnio = Number(prompt(listaxAnio));
        if (opcionAnio < anioVino.length) {
            verPorAnio(opcionAnio);
        } else if (opcionAnio == opcionAnio.length + 1) { 
            bandera = false;
        } else {
            alert('Digitaste una opcion invalida del anio de vino');
            opcionAnio = 0; // le asigno esta opcion para que se siga mostrando el menu del WHILE
        }   
    }
} */

//function verCategoriaDetallada(Opcion) {
    // const filtrarListaVinos = [];
    // let elementoComparacion1= "", elementoComparacion2;

    // //elementoComparacion1 = filtrarListaVinos[0].color;
    // filtrarListaVinos.push(listaDeVinos[0].color);
    // console.log(filtrarListaVinos);
    // for (let i=1; i < listaDeVinos.length; i++) {
    //      console.log(`valor de i= ${i}; longitud array ${listaDeVinos.length}; longitud NuevoArray ${filtrarListaVinos.length}`);
    //     for (let indice=0; indice < filtrarListaVinos.length; indice++) {
    //         /* 
    //         console.log('va a comparar');
    //         console.log(listaDeVinos[i].color);
    //         console.log(filtrarListaVinos[indice]); */
    //         if (listaDeVinos[i].color !== filtrarListaVinos[indice]) {
    //             filtrarListaVinos.push(listaDeVinos[i].color);
    //             console.log(`entro a grabar i= ${i}; indice= ${indice}; ${listaDeVinos[i].color}; ${filtrarListaVinos[indice]}`);
    //             //console.log(listaDeVinos[i].color);
    //             //console.log(filtrarListaVinos[indice]);
    //         }
    //     }
    // }
    // console.log('hola');
    // console.log(filtrarListaVinos);
    //console.log(listaDeVinos[0].);
    // for (let i = 0; i < listaDeVinos.length; i++) {
	// 	filtrarListaVinos.push(listaDeVinos[i].caracteristica);
	// }

    // // let tituloABuscar = prompt('¿Que libro busca?')
    // console.log(filtrarListaVinos);
//}

