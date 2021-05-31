This course is Net Ninja's Youtube course: https://www.youtube.com/playlist?list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI

This project does not run, because I only took notes and did not build the app (the app uses generic HTML/CSS, and not React)

`npx tsc sandbox.ts` will compile
`npx tsc sandbox.ts -w` will auto compile with the watch flag
`npx tsc --init` will create a tsconfig.json file

---

## Types

You can set the type of params in functions like this:

### Basics

Can't change types once they are set: 

```
let number = 1
let boolean = true
let string = 'hello'
```
### Functions

```
const doubleFunc = (param: number) => {
  return param * 2
}
```

### Arrays

Whatever the array contains on creation will be the types allowed.
```
let arr = ['one', 'two', 'three', true]
arr.push(4) // this will not work, because array values are set to be of type strings and booleans. 

```

### Objects 
These properties are set to specific types, so `age` couldn't be a boolean or string, etc.
We also cannot add extra properties once the object is defined.

```
let dog = {
  name: 'kuma',
  age: 11,
}
```
---

## Explicit Types
Basics
```
let userName: string;
let usedId: number;
let isLoggedIn: boolean;
```

Arrays
```
let arrayOfStrings: string[]; //only strings allowed in array
let arrayOfStrings: string[] = []; //initialize arrayOfStrings as a value
```

Union Types
Allowing either strings or numbers in an array:
```
let mixed: (string | number)[] = [] 
```

Allowing either strings or numbers in a variable
```
let uid = string|number;
```

Objects
```
let dog: object;
dog: {name: 'kuma' , weight: 12};
```
dog: [] //works because an array is a kind of object

The other way to explictly type, or declare, objects.
Any cat object would have to have all of these properties. 
```
let cat: {
  name: string,
  color: string,
  weight: number
}
```
---

## Function Basics
A basic function
```
let greet = () => {
  console.log('hello world')
}
```
or
```
let greet2: Function;
greet2 = () => {
  console.log('hello')
}
```
### Passing in params
- ? make c? optional
- make a default value with `c: number | string = 10`
```
const add = (a: number, b: number, c?: number | string) => {
  console.log(a + b)
}
add(5,10,'1')
```

### Returning a value
- :number is optional. :number sets the return type
- void represents a lack of return value
- undefined is separate thing than void
```
const minus = (a: number, b: number): number => {
  return a + b
}

let result = minus(10, 7)
```
- `result` becomes the type of the return value 
- hover over `result` to see the type

---
## Type Aliases
```
type StringOrNum = string | number
type ObjectWithName = {name: string, uid: StringOrNum}

const logDetails = (uid: string | number, item: string) => {
  console.log()
}
// use StringOrNum like this

const logDetails2 = (uid: StringOrNum, item: string) => {
  console.log()
}

// -----------------------------------------------------------

const greet = (user: {name: string, uid: StringOrNum}) => {
  console.log()
}

// use ObjectWithName like this

const greet2 = (user: ObjectWithName) => {
  console.log()
}
```
---
## Function Signatures
`someFunction` takes no arguments, and returns void
```
let someFunction: Function;
() => void
```
### example 1
```
let greet: (a: string, b: string) => void
// this follows the signature above: 2 params that are strings, and it doesn't return anything
greet = (name: string, greeting: string) => {
  console.log(`${name} says ${greeting}`)
}
```
### example 2
```
let calc: (a: number, b: number, c: string) => number
// this follows the signature above: 2 number params, 1 string param, return a number
calc = (num1: number, num2: number, action: string) => {
  if (action === 'add') {
    return num1 + num2
  } else {
    return num1 - num2
  }
}
```
### example 3
```
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
```
---
## Classes
https://www.youtube.com/watch?v=OsFwOzr3_sE&list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI&index=12

---

## Public, Private, Readonly
Private prevents accessing a property outside of the class
Readonly means you can read, but not change the value
https://www.youtube.com/watch?v=aYmnwDlPB8s&list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI&index=13

---
## Modules
Using import/export of javascript modules with Typescript
https://www.youtube.com/watch?v=EpOPR03z4Vw&list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI&index=14

## Interfaces
https://www.youtube.com/watch?v=VbW6vWTaHOY&list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI&index=15
If we have a variable that is declaring itself to be an `IsPerson`, it must have these properties and these methods

```
interface IsPerson {
  name: string;
  age: number;
  speak(a: string): void //must return void
  spend(a: number): number //must return a number
}

// Example Using IsPerson

const me: IsPerson = {
  name: 'Sam',
  age: 100,
  speak: (words: string): void { //speak has to return void
    console.log()
  },
  spend(amount: number): number { //spend has to return a number
    return amount * 1
  }
};

const greetPerson = (person: IsPerson) => {
  // can log person.name, person.age, person.speak, person.spend
  console.log(person.name) 
}  

// can call like below, because it matches the interface
greetPerson(me)

// cannot do this because it does not match the interface
greetPerson('Kuma')
```
---
## Interfaces with Classes
https://www.youtube.com/watch?v=XPGFqx8Vg-Y&list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI&index=16

---
## Generics
https://www.youtube.com/watch?v=IOzkOXSz9gE&list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI&index=18
More details in video, including interfaces 
Basics:  
Usually will be a `<T>`  
Generics let us use whatever param properies are passed into the function  

```const addUID = <T>(obj: T) => {
  let uid = 'random number calc here'
  return {...obj, uid}
}

let docOne = addUID({name: 'kuma', age: 11})
//now can log `docOne.name` or `docOne.age` or `docOne.uid`

```

## Enums
https://www.youtube.com/watch?v=r8G7-hQG07o&list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI&index=19

```
enum ResourceType { BOOK, AUTHOR, FILM }

interface Resource<T> { // interface Resource is generic
  uid: number;
  resourceType: ResourceType;
}

const docOne: Resource<object> = {
  uid: 1,
  resourceType: ResourceType.BOOK // enums only allow what is specified, and will associate with a number 0, 1, 2, etc
}

```

## Tuple
https://www.youtube.com/watch?v=tHSstkiVbc8&list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI&index=20

- The type of data in position in a tuple is fixed once initialized  
- Use array methods on tuple  

//have to declare tuples like this, or it's an array
let tup: [string, number, boolean]
