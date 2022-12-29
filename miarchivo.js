function calcularTiempoDeEspera(){
    let tiempo = 60;
    let turnos = parseInt(prompt("Ingrese la cantidad de turnos registrados"));
    while(isNaN(turnos) == true || turnos < 0){
        turnos = parseInt(prompt("Ingreso erroneo, vuelva a intentarlo"))
    }
    if (turnos >= 0 && turnos <= 2){
        return(" Su turno es el numero "+parseInt(turnos+1)+" y tendra que esperar "+tiempo/6+" minutos");
    }else if (turnos > 2 && turnos <= 5){
        return(" Su turno es el numero "+parseInt(turnos+1)+" y tendra que esperar "+tiempo/3+" minutos");
    }else if ( turnos > 5 && turnos <= 8){
        return(" Su turno es el numero "+parseInt(turnos+1)+" y tendra que esperar "+tiempo/2+" minutos");
    }else if (turnos > 8 && turnos <= 10){
        return(" Su turno es el numero "+parseInt(turnos+1)+" y tendra que esperar "+tiempo/1.5+" minutos");
    }else{
        return(" Su turno es el numero "+parseInt(turnos+1)+" y tendra que esperar "+tiempo+" minutos o mas");
    }
}

console.log(calcularTiempoDeEspera());