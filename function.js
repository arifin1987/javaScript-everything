// ----Add three numbers and find average-----


function findAverage(num1,num2,num3){
    const sum = num1 +num2 +num3;
    const average = sum / 3;
    return average

}
// console.log(findAverage(12,14,16))

// ----If the numbers is even then show true and if odd then show false----
function findEvenOdd(num){
    if(num %2 ===0){
        return true
    }else{
        return false
    }

}
// console.log(findEvenOdd(7))


// ----send number and boolean as a function parameter----
function makeDouble(num1, double){
    if(double == true){
        return num1 *2
    }else{
        return num1 *3
    }

}
// console.log(makeDouble(12,false))

//---- add the numbers of an array----
function addArray(numbers){
    let sum =0;
    for(let num of numbers){
        sum = sum + num;
    }
    return  sum

}
// console.log(addArray([12,34,45]))

//---- add the even number of an array----
function addEven(numbers){
    let sum =0;
    for(let num of numbers){
        if(num %2 ===0){
            sum = sum +num;
        }
    }
    return sum;


}
// console.log(addEven([12,23,45,22]))

//----add the odd number of an array----
function addOdd(numbers){
    let sum =0;
    for(let i =0; i<numbers.length; i++){
        if(numbers[i] % 2 !==0){
            sum = sum + numbers[i]
        }
    }
    return sum

}
// console.log(addOdd([12,14,19,45]))

// ----Return array of even numbers-------

function returnEven(numbers){
    let emptyArray = [];
    for(let number of numbers){
        if(number % 2 ===0){
            emptyArray.push(number);

        }
    }
    return emptyArray;

}

const myarray = [11,12,14,71,22,32,43]
const result = returnEven(myarray);
console.log(result)