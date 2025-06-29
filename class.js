
class Vehicle{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    move(){
        console.log('car is moving')
    }
}

class Bus extends Vehicle{
    constructor(name, price, seat, ticketPrice){
        super(name, price);
        this.seat = seat;
        this.ticketPrice = ticketPrice;

    }
}

class Truck extends Vehicle{
    constructor(name, price, load){
        super(name, price);
        this.load = load;
    }
}
    
  
/** This is another example of class */
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    sleep(){
        console.log(`sleeping now ${this.name}`)
    }
}

const kodom = new Person('kodom ali', 23)
console.log(kodom);
console.log(kodom.sleep());