// string is immutable --> not changeable
// Array is mutable --> changeable

const myString = 'Mymensingh'

// console.log(myString.length)

// console.log(myString[1])
myString[0] = 'l'
// console.log(myString)

const myArray = [11,22,34,5]

myArray[0] =2;
// console.log(myArray)

// ------Uppercase && Lowecase && Trim(trim() is used to trim at the begining and at the end)----------
const greetings = 'hello world';
const school = 'CANT PUBLIC SCHOOL'
const trimming = ' hello   '
console.log(trimming.trim())

console.log(greetings.toUpperCase())
console.log(school.toLowerCase())

// -- Slice & Join & Split & Concat---

const something = 'Bangladesh is my country'
console.log(something.slice(0,6))

console.log(something.split(' '))

const country = [ 'Bangladesh', 'is', 'my', 'country' ]
console.log(country.join(' '))

const firstName = 'Shohidul'
const lastName = 'Arifin'

console.log(firstName+ ' ' + lastName)
console.log(firstName.concat(' ').concat(lastName))