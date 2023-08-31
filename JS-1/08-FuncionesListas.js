const miLista = ["frutilla", "vainilla", "chocolate", "dulce de leche"];

let elementosMiLista = miLista.length;

console.log(elementosMiLista);

// Como remover el primer elemento de la lista
miLista.shift()
console.log(miLista)

// Como remover el ultimo elemento de la lista
miLista.pop()
console.log(miLista)


const miLista2 = ["frutilla", "vainilla", "chocolate", "dulce de leche", "granizado de menta"];
// Como filtrar elementos en una lista
const listaFiltrada =  miLista2.filter((e)=> e.length>10);

console.log(listaFiltrada)

// Como pasar una lista a string
console.log(miLista2.join(' '))

// Como ordenar una lista
console.log(miLista2.sort())

// Como saber la posicion de un elemento en una lista
console.log(miLista2.indexOf('chocolate'))