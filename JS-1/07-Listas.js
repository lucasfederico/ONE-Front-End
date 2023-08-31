const ciudad1 = "Bógota"
const ciudad2 = "Lima"
const ciudad3 = "Santiago"

// Definicion de una lista 
const ciudadesDisponibles = new Array("Bógota", "Lima", "Santiago")
console.log(ciudadesDisponibles)

// Definicion de una lista
const paisesDisponibles = ["Colombia", "Perú", "Chile", "Brasil"];
console.log(paisesDisponibles)

// Agregar elemento al final de la lista
ciudadesDisponibles.push("Buenos Aires")
console.log(ciudadesDisponibles)

// Agregar elemento al principio de la lista
paisesDisponibles.unshift("España");
console.log(paisesDisponibles)

// Mostrar elemento de la lista
console.log(ciudadesDisponibles[0])

// Quitar valor de la lista
paisesDisponibles.splice(2, "Japon")
console.log(paisesDisponibles)