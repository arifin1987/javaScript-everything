const myInfo = {
    firstName: 'Shohidul',
    lastName: 'Arifin',
    District: 'Mymensingh',
    age: 35,

}

// console.log(myInfo['firstName'])
// console.log(myInfo.lastName)

myInfo.firstName = 'anyName'


for(const item in myInfo){
    console.log(item)
}