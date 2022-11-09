const servicios = [
    { nombre: "cejas", precio: 2000},
    { nombre: "pestañas", precio: 2000},
    { nombre: "depilación de espalda", precio: 90000},
    { nombre: "depilación de bozo", precio: 17000},
    { nombre: "depilación de axilas", precio: 20000},
    { nombre: "depilación de cavado", precio: 34000},
    { nombre: "electroporación", precio: 3200},
    { nombre: "limpieza de cutis", precio: 4000},
    { nombre: "radiofrecuencia facial", precio: 4000},
];

//Iniciar Sesión 
let usuario = prompt("TicTac Beauty te da la bienvenida para iniciar sesión debes ingresar tu usuario");
let contrasenia = prompt("Ingresa tu contraseña"); 
if (usuario == ""){
    alert("El campo usuario no puede estar vacío");
}   else if (contrasenia == "") {
        alert ("El campo contraseña no puede estar vacío");
}   else {
        alert ("Bienvenid@ " + usuario + ", " + "ingreso válido");
}


//Menú        
function captura () {
    let carrito = [];
    let seleccion = prompt("Seleccione una opción:\n 1- Sacar turno\n 2- Salir ");
        
    while (seleccion != "1" && seleccion != "2") { 
        alert("Por favor, ingresa 1 o 2")
        seleccion = prompt("Seleccione una opción:\n 1- Sacar turno\n 2- Salir");
    }

    if (seleccion == "1"){ 
        alert("A continuación nuestra lista de servicios")
        let todosLosServicios = servicios.map((servicios)=> servicios.nombre + " " + servicios.precio + "$" );
        alert(todosLosServicios.join("\n"))
    }   else if (seleccion == "2") {
        alert("Muchas gracias, vuelva pronto");
        let usuario = prompt("TicTac Beauty te da la bienvenida para iniciar sesión debes ingresar tu usuario");
        let contrasenia = prompt("Ingresa tu contraseña"); 

            if (usuario == ""){
                alert("El campo usuario no puede estar vacío");
            } else if (contrasenia == "") {
                alert ("El campo contraseña no puede estar vacío");
            } else {
                alert ("Bienvenid@ " + usuario + ", " + "ingreso válido");
            } 
        seleccion = prompt("Seleccione una opción:\n 1- Sacar turno\n 2- Salir");
    }


    while (seleccion != "2") {
        let servicios = prompt("Agrega un servicio a tu carrito");
        let precio = 0;
    
        if (servicios == "cejas" || servicios == "pestañas" || servicios == "depilación de espalda" || 
            servicios ==  "depilación de bozo" || servicios == "depilación de axilas" || servicios == "depilación de cavado" || 
            servicios ==  "electroporación" || servicios == "limpieza de cutis" || servicios == "radiofrecuencia facial"){
            switch(servicios){
                case "cejas": 
                    precio = 2000;
                break;
                case "pestañas": 
                    precio = 2000;
                break;
                case "depilación de espalda": 
                    precio = 90000;
                break;
                case "depilación de bozo": 
                    precio = 17000;
                break;
                case "depilación de axilas": 
                    precio = 20000;
                break;
                case "depilación de cavado": 
                    precio = 34000;
                break;
                case "electroporación": 
                    precio = 3200;
                break;
                case "limpieza de cutis": 
                    precio = 4000;
                break; 
                case "radiofrecuencia facial": 
                    precio = 4000;
                break;
                default:
                break;
            }
            
            let fecha = prompt("Qué día de la semana desea asistir a su turno? Debe tener en cuenta que los domingos no prestamos servicios"); 
            if (fecha == "lunes" || fecha == "martes" || fecha == "miercoles" || fecha == "jueves" || fecha == "viernes" || fecha == "sabado"){
                carrito.push({servicios, precio, fecha});  
                console.log(carrito); 
                       
            }   else {
                    alert("Debe ingresar un día de la semana, recuerde que los domingos no prestamos servicios:\n lunes\n martes\n miercoles\n jueves\n viernes\n sabado\n ");
                    fecha = prompt("Qué día de la semana desea asistir a su turno? Debe tener en cuenta que los domingos no prestamos servicios");    
            }   

        }   else {
                alert("No tenemos ese servicio");
        }
  
        seleccion = prompt("Desea seleccionar otro servicio?");
        if(seleccion === "no"){
            alert("Gracias por su reserva");
            carrito.forEach((carritoFinal) => {
                console.log (`Servicio: ${carritoFinal.servicios}\n Fecha: ${carritoFinal.fecha}\n Total a pagar por servicio: ${carritoFinal.precio}`)
            })
            break;    
        }    
    }
 
    const total = carrito.reduce((acc, el) => acc + el.precio, 0);
    console.log ("El total a pagar por todos los servicios es de: " + "$" + total);
}
     

    
           
    
        

