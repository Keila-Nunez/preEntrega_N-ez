
//Iniciar Sesión 
let usuario = prompt("TicTac Beauty te da la bienvenida para iniciar sesión debes ingresar tu usuario");
let contrasenia = prompt("Ingresa tu contraseña");

    if (usuario == ""){
            alert("El campo usuario no puede estar vacío");
        } else if (contrasenia == "") {
            alert ("El campo contraseña no puede estar vacío");
        } else {
            alert ("Bienvenid@ " + usuario + ", " + "ingreso válido");
    }  
  
//Menú
function captura () {
    let opcion = parseInt (prompt("Seleccione una opción:\n 1- Sacar turno\n 2- Ver calendario\n 3- Salir "));
    let menu;
    while (opcion != 3 ) {
        switch (opcion) {
            case 1:
                let sacarTurno = parseInt (prompt("Qué servicio desea:\n Depilación:\n 1- Bozo\n 2- Espalda\n 3-Pecho\n  Cejas y pestañas:\n 4-Microshading\n 5- Lifting de pestañas\n 6- Retoque\n Manicuría:\n 7- Mantenimiento\n 8- Esmaltado permanente\n 9- Esmaltado semipermanente"));
                if (sacarTurno == 1) {
                    alert("Turno reservado para depilación de bozo, el monto a pagar es de $1.000");
                } else if (sacarTurno == 2){
                    alert ("Turno reservado para depilación de espalda, el monto a pagar es de $21.000"); 
                } else if (sacarTurno == 3){
                    alert ("Turno reservado para depilación de pecho, el monto a pagar es de $25.000");
                } else if (sacarTurno == 4){
                    alert ("Turno reservado para Cejas y pestañas: Microshading, el monto a pagar es de $36.000");
                } else if (sacarTurno == 5){
                    alert ("Turno reservado para Cejas y pestañas: Lifting de pestañas, el monto a pagar es de $3.000");
                } else if (sacarTurno == 6){
                    alert ("Turno reservado para Cejas y pestañas: Retoque, el monto a pagar es de $7.000");
                } else if (sacarTurno == 7){
                    alert ("Turno reservado para Manicuría: Mantenimiento, el monto a pagar es de $2.000");
                } else if (sacarTurno == 8){
                    alert ("Turno reservado para Manicuría: Esmaltado permanente, el monto a pagar es de $2.000");
                } else if (sacarTurno == 9){
                    alert ("Turno reservado para Manicuría: Esmaltado semipermanente, el monto a pagar es de $1.500");
                } else if (isNaN (sacarTurno)){
                    alert("Debe ingresar una opción valida, recuerde usar números");
                } else if (sacarTurno >= 10 ){
                    alert ("La opción ingresada no es válida");
                    return sacarTurno;
                } else if (sacarTurno == ""){
                    alert("Debe ingresar una opción");
                } else{
                    alert ("Para reservar un turno debe escoger una opción"); 
                }
                break;
            case 2: 
                    alert ("Tienes un turno reservado para: Depilación de espalda\n Tienes un turno reservado para: Lifting de pestañas\n Tienes un turno reservado para: Esmaltado semipermanente"); 
                break;
            case 3: 
                    alert ("Vuelva pronto");
                break;
                default:
                    alert ("Opción incorrecta") ;  
        }
        opcion = parseInt (prompt("Seleccione una opción:\n 1- Sacar turno\n 2- Ver calendario\n 3- Salir "));
    }
}
