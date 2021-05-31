
// Note: Takes no arguments, and returns void
let someFunction: Function;
() => void

//example 1 -----------------------------------------------------
let greet: (a: string, b: string) => void
// this follows the signature above: 2 params that are strings, and it doesn't return anything
greet = (name: string, greeting: string) => {
  console.log(`${name} says ${greeting}`)
}

//example 2 -----------------------------------------------------
let calc: (a: number, b: number, c: string) => number
// this follows the signature above: 2 number params, 1 string param, return a number
calc = (num1: number, num2: number, action: string) => {
  if (action === 'add') {
    return num1 + num2
  } else {
    return num1 - num2
  }
}

//example 3 -----------------------------------------------------
let logDetails: (object: {name: string, age: number}) => void
logDetails = (ninja: {name: string, age: number}) => {
  console.log(ninja)
}

// furthering example 3
let logDetails2: (object: {name: string, age: number}) => void
type person = {name: string, age: number}
logDetails = (ninja: person) => {
  console.log(ninja)
}