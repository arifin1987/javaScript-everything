const numbers = [12,34,39,35,33]

const student ={
    name: 'Sakib khan',
    age: 34,
    movies: ['king khan', 'Dhakar mastan']
}

// template string
const about = `My name is ${student.name}. My age is ${student.age}. My number is ${numbers[0]} . My movie is ${student.movies[0]}`


// arrow function
const getFiftyFive = ()=> 55;
const addSixtyFive = num=> num +65;
const sum = (num1,num2, num3)=> num1+num2+num3;
const multi = (num1,num2)=>{
    const multi = num1 * num2;
    return multi;
}

// spread operator
const newNumbers = [...numbers, 55, 66]
console.log(newNumbers)