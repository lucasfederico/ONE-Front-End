const ciudadesDisponibles = new Array("Bogotá", "Lima", "Santiago", "Montevideo");

const ciudadDestino = "Montevideo"

let valorPasaje = 0;

switch(ciudadDestino){
    case "Bogotá":
        valorPasaje = 500;
        break
    case "Lima":
        valorPasaje = 400;
        break
    case "Santiago":
        valorPasaje = 380;
        break
    case "Montevideo":
        valorPasaje = 200;
        break

}
console.log(`El valor del pasaje es ${valorPasaje}`)