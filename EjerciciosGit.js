// 4. Crear una función que reciba un string y luego imprimir la cantidad de
// vocales que se encuentran en dicha frase.

const vocales = (palabra) => {
    let cont = 0
    for (let i = 0; i < palabra.length; i++) {
        if (palabra[i] === 'a' || palabra[i] === 'e' || palabra[i] === 'i' ||
            palabra[i] === 'o' || palabra[i] === 'u') {
            cont ++
        }        
    }
    return cont
}
console.log(vocales('prueba'));

// 5. Realizar una función que, dada una lista, devuelva una nueva lista cuyo
// contenido sea igual a la original pero invertida.

const invertida = (array) =>{
    let nuevoArray = []
    for (let i = 0; i < array.length; i++) {
        nuevoArray += array[array.length-i-1]
    }
    return nuevoArray
}
console.log(invertida('asado'));

const arrayCuentas =
    [
        {
            titular: "Arlene Barr",
            estaHabilitada: false,
            saldo: 3253.40,
            edadTitular: 33,
            tipoCuenta: "sueldo"
        },
        {
            titular: "Roslyn Torres",
            estaHabilitada: false,
            saldo: 3229.45,
            edadTitular: 27,
            tipoCuenta: "sueldo"
        },
        {
            titular: "Cleo Lopez",
            estaHabilitada: true,
            saldo: 1360.19,
            edadTitular: 34,
            tipoCuenta: "corriente"
        },
        {
            titular: "Daniel Malone",
            estaHabilitada: false,
            saldo: 3627.12,
            edadTitular: 30,
            tipoCuenta: "sueldo"
        },
        {
            titular: "Ethel Leon",
            estaHabilitada: true,
            saldo: 1616.52,
            edadTitular: 34,
            tipoCuenta: "sueldo"
        },
        {
            titular: "Harding Mitchell",
            estaHabilitada: true,
            saldo: 1408.68,
            edadTitular: 25,
            tipoCuenta: "corriente"
        }]

// Desarrollar una función que ordene internamente de forma ascendente según él saldo 
// de cada cuenta, la misma deberá retornar él array ordenado.
const ordenarSaldo = array => {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j].saldo > array[j+1].saldo) {
                let temp = array[j]
                array[j] = array[j+1]
                array[j+1] = temp        
            }
        }
    }
    return array
}
//console.log(ordenarSaldo(arrayCuentas));

// Desarrollar una función que ordene internamente de forma ascendente según la edad del titular 
// de cada cuenta, la misma deberá retornar él array ordenado.
const ordenarEdad = array => {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j].edadTitular > array[j+1].edadTitular) {
                let temp = array[j]
                array[j] = array[j+1]
                array[j+1] = temp        
            }
        }
    }
    return array
}
console.log(ordenarEdad(arrayCuentas));

let gastos = [
    [1135,2500,900,1600,2800,3650,1100],
    [1750,1890,1900,1300,898,1750,2800],
    [1700,1150,1690,1900,1770,4500,2560],
    [800,1250,1430,2100,1980,1270,950]
]
console.table(gastos)
// a)  Lo que nos solicitan es dar el total de gastos en una semana. Recordemos que cada fila 
// representa una semana, es decir, si nos indican semana 2 tenemos que sumar la fila 1 de la 
// matriz. Recordar que las matrices comienzan siempre en posición 0. 
const gastosSemanales = (semana, matriz) =>{
    let gastoTotal = 0
    for (let i = 0; i < semana; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            gastoTotal += matriz[i][j];
        }
    }
    return gastoTotal
} 
console.log(gastosSemanales(2, gastos));


// b) La aplicación también tendrá una parte de estadísticas, para esto nos solicitan dar el 
// total de un día en particular, por ejemplo del día 3, acá también tengamos en cuenta lo que 
// ocurre con las filas, ya que las columnas también comienzan en 0.
const gastosDiario = (dia, matriz) =>{
    let gastoTotal = 0
    for (let i = 0; i < matriz.length; i++) {
        if (matriz[i][dia] !== undefined) {
            gastoTotal += matriz[i][dia]
        }
    }
    return gastoTotal
} 
console.log(gastosDiario(2, gastos));

// c) Por último, es necesario tener el total de gastos realizados en el mes.
// Pregunta para pensar, ¿es lo mismo recorrer por filas o por columnas para resolver este último 
// punto?
const gastoMensual = (matriz) =>{
    let gastoTotal = 0
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            gastoTotal += matriz[i][j];
        }
    }
    return gastoTotal
} 
console.log(gastoMensual(gastos));

// Opcional
// d) Obtener cuál fue la semana que más gastos se realizaron. Indicar el día que más gastos se realizaron.
// Posibles matrices para comprobar los resultados. 
// (ver en playground la matriz)
const mayorGasto = (matriz) =>{
    let gastoDiario = 0
    let semanaDia = []
    let semana = []
    let gastoSemanal = 0
    let gastoSemanalMayor = 0

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if (gastoDiario < matriz[i][j]) {
                gastoDiario = matriz[i][j]
                semanaDia = [i+1,j+1]
            }
            gastoSemanal += matriz[i][j]
        }
        if (gastoSemanalMayor < gastoSemanal){
            gastoSemanalMayor = gastoSemanal
            semana = [i+1]
        }
        gastoSemanal = 0
    }
    return console.log(`El mayor gasto diario fue de $ ${gastoDiario},
    del dia ${semanaDia[1]}, de la semana ${semanaDia[0]}.
    La semana de mayor gasto fue la semana ${semana} con $ ${gastoSemanalMayor}`);
} 
mayorGasto(gastos)

// 5) Escribir una función que reciba una array y solo imprima los valores que
// se repiten. Por ejemplo, dada la siguiente array e índice, la función
// imprimirá '6,23,33,100'. let array =
// [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];

let array1 = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];

const numRepetir = (array) =>{
    let numRep = []
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] === array[j] && i !== j){
                numRep.push(array[i])
            } 
        }       
    }
    return numRep
}

// // Palíndromo
// // Deberás crear una función llamada palindromo que indique si una palabra 
// // es palíndroma o no. Debe retornar “true” en caso de que lo sea, 
// // y “false” en caso de que no. Ejemplo:
// // palindromo(“anilina”) debe retornar true
// // palindromo(“Ana”) debe retornar true
// // palindromo(“Enrique”) debe retornar false
const palindromo = palabra =>{
    palabra = palabra.toLowerCase();
    let palCom = [] 
    let pal = []
    let flag = true
    for (let i = 0; i < palabra.length; i++) {
        pal[i] = palabra[i]
        palCom[i] = palabra.slice(palabra.length-1-i, palabra.length-i)
        if (pal[i] === palCom[i]){
            flag = true
        }
        else{
            flag = false
        }
    }
    if (flag){
        console.log('Es palindroma');  
    }
    else{
        console.log('No es palindroma');   
    }
}

palindromo('hola')

// FIBONACCI
const fibonacci = numero => {
    let resFibo = 0
    let i = 1
    while(resFibo < numero){
        resFibo = resFibo + i
        i = resFibo-i
        console.log('Fibonacci', resFibo)
    }
}
fibonacci(20)