const ciudadesDisponibles = new Array("Bogotá", "Lima", "Santiago", "Montevideo");
const precioCiudad = new Array(500, 400, 380, 200);

const presupuestoDisponible = 390;
while (precioCiudad[i] > presupuestoDisponible) {
    i++
}
console.log("Puedes comprar pasaje para: ", ciudadesDisponibles[i])