// -----For of Loop ------

let fruits = ['apple', 'banana', 'mango', 'litchi'];

for (let fruit of fruits){
    // console.log(fruit)
}

// Show numbers from 0 to 20

for( let i=0; i<=20; i++){
    // console.log(i)
}

//----- Show the sentence "hello world" 10 times----

for(let i=0; i<=10; i++){
    // console.log('hello world')
}

// ----Show the number in arrays----

const numbers = [12,34,45]

for(let i=0; i<numbers.length; i++){
    // console.log(numbers[i])
}

// ----Find the even numbers in the array---

let nums=[12,34,55,45,34]

for(let num of nums){
    if(num % 2 ===0){
        // console.log(num)
    }
}

// ----Find the sum of odd numbers in an array-----

const myNums = [12,35,7,9]
let sum =0;
for(let num of myNums){
    if(num % 2 !==0){
        sum = sum + num;
       

    }
}
// console.log(sum)

// ---find the even number in an array and push it in a new array

let arrays = [12,23,44,55,33,66,88]
let newArray =[];
for(let arr of arrays){
    if(arr % 2 === 0){
        newArray.push(arr);

    }
}

console.log(newArray)