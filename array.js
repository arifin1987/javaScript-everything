// Array length and indexing

const numbers = [1,2,3,4,5,6]

// console.log(numbers.length);
// console.log(numbers[1])

// to enter value at the end of the array we use push() method, and to enter value at the begining we use unshift.
// to remove value at the end of the array we use pop() method, and to remove value at the begining we use shift.
numbers.push(125)
numbers.pop()
numbers.unshift(123,45)
numbers.shift()

// console.log(numbers)

const fruits = [ 'banana', 'mango', 'orange', 'grapes']
const vegis = ['cabbage', 'potato', 'okra', 'onion']

// console.log(fruits.includes('mango'))
// console.log(fruits.indexOf('grapes'))
// console.log(Array.isArray(fruits))
// console.log(fruits.slice(1,3))
// console.log(fruits.concat(vegis))
// console.log(fruits.join('|'))
// console.log(vegis.join(' and '))
fruits.push(...vegis) //spread operator
console.log(fruits)