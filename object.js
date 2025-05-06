const person = {
    name: 'sodor uddin',
    age: 35,
    profession: 'developer',
    salary: 30000,
    married: true,
    qualities:{
        development:['html', 'css', 'js']

    },
    'fav places' : ['cox', 'sajek']
        
    
}
// console.log(person.name)
// console.log(person['age'])
// console.log(person.qualities.development[2])
// console.log(person["fav places"])

// value can be set in object
person.salary = 50000;
person['age'] = 40
// console.log(person)

// ----keys and value can be found from object------

const findKeys = Object.keys(person);
const findValues = Object.values(person);
// console.log(findValues)

// key can be delete from object
delete person.married
// console.log(person)

// for in loop to find keys and value from the object
for(let prop in person){
    // console.log(prop)
    // console.log(person[prop])
}

// Object can be create in these way

const pencil = new Object()

const pen = Object.create({})

console.log(pencil)
console.log(pen)