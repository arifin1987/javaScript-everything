// Array destructuring
const numbers = [23,24];

const [x,y]= [23,24]
const [,b] = numbers

const boxify =(num1, num2)=>{
    const nums = [num1, num2]
    return nums;
}

const result = boxify(45,56)
const [first, second] = boxify(45,56) //function can be destructure too
console.log(first, second)


// Object Destructuring


const employee = {
    ide: 'VS code',
    designation: 'developer',
    machine: 'mac',
    languages: ['html', 'css', 'js'],
    specification:{
        height: 66,
        weight: 70,
        address: 'Dhaka',
        drink: 'coke',
        watch: {
            color:'black',
            brand: 'Titan',
            price: 700
        }
    }
}
const {machine, ide} = employee;

const {weight, height} = employee.specification;
const {brand} = employee.specification.watch;
const [lang1,lang2] = employee.languages;
console.log(lang1,lang2)