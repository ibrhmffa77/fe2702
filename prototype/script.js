// 1. Create a Constructor Function: Write a constructor function for a Car object that includes properties like make, model, and year.
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

let merc = new Car('mercedes', 'amg gt 63s', 2020)
console.log(merc)

// 2. Add Prototype Methods: Add a method to the Car prototype called getDetails that returns a string with the car’s details (e.g., “2020 Toyota Camry”)
Car.prototype.getDetails = function () {

    return `${this.make} ${this.model} ${this.year}`
}
console.log(merc.getDetails())


// 3. Inheritance: Create a SportsCar constructor that inherits from Car. Add a property topSpeed and a method getTopSpeed that returns the top speed.
function SportsCar(topSpeed) {
    this.topSpeed = topSpeed;

    this.getTopSpeed = function () {
        console.log(`top speed ${topSpeed}`)
        return topSpeed
    }

}
SportsCar.prototype = merc;

let merc_gt = new SportsCar(300)
merc_gt.getTopSpeed();

// 4. Prototype Chain: Demonstrate the prototype chain by creating an instance of SportsCar and accessing properties and methods from both Car and SportsCar.
console.log(merc_gt.model);
console.log(merc_gt.year);

// 5. Modify Prototype: After creating instances, modify the getDetails method on the Car prototype to include the color of the car, and observe how it affects all instances

Car.prototype.getDetails = function(color){
    console.log(`${this.make} ${this.model} ${this.year} ${color}`)
}
merc.getDetails("black");

// 6. Static Methods: Implement a static method on the Car constructor called compare that takes two car objects and returns the one with the higher year
Car.compare = function(car1, car2){
    if(car1.year > car2.year){
        console.log(car1.make)
        return car1
    }
    else if( car2.year > car1.year){
        console.log(car2.make)
        return car2
    }
    else{
        return null
    }

}
let bmw = new Car ("bmw", "f30", 2015)
Car.compare(merc, bmw)

// 7. Object.create: Use Object.create to create an instance of Car without using a constructor function. Add properties directly to the instance.
let car = {
    model: "f10",
    make: "bmw",
    year: 2019,
    getAllInfo: function(){
        console.log(`${this.model} ${this.make} ${this.year}`)
    }
};
const newCar = Object.create(car);
newCar.getAllInfo();

// 8. Check for Prototypes: Write a function that checks if a given object is an instance of Car or SportsCar using instanceof
function checkProto(object){
    if(object instanceof SportsCar || object instanceof Car){
        return true
    }
    else{
        return false
    }
}
console.log(checkProto(merc))

// 9. Prototype vs. Instance Properties: Create an instance of Car, add a property directly to the instance, and show how it differs from a prototype property


// 10. Array of Objects: Create an array of Car objects and write a method on the Car prototype that takes an array and returns the car with the latest year.

const cars =[
    new Car ("Bentley", "Flying Spur", 2015),
    new Car ("Audi", "A8", 2018),
    new Car ("Maserati", "Quattroporte", 2011)
]
Car.prototype.getLatestCar = function(carsArr){
    return carsArr.reduce((latestCar, currentCar) => {
        return currentCar.year > latestCar.year ? currentCar : latestCar;
    })
}
const latestCar = Car.prototype.getLatestCar(cars);
console.log(latestCar)