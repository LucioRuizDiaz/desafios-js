let nombre = prompt("Ingrese su nombre. Ingrese Esc para salir.");


while (nombre != "Esc") {
     if (isNaN(nombre)) {
        let numero = parseInt(prompt("Hola " + nombre + "! Ingresa tu numero para ver si es par o impar. Ingresa 0 para salir"));

        if (numero == 0) {
            alert("Chau!");
            break;
        }
        else {
            if (isNaN(numero)) alert("Ingresa un numero");
            else {

                if (numero % 2 == 0) alert(numero + " es par");
                else alert(numero + " es impar");

            }
        }
     }

     else nombre = prompt("Ingresaste un numero. Tenes que ingresar un nombre");
}