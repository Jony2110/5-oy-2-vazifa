


class Car {
    constructor(brand, year) {
        this.brand = brand;
        this.year = year;
    }

    displayInfo() {
        console.log( this.brand , this.year);
    }
}

class ElectricCar extends Car {
    constructor(brand, year, batteryLife) {
        super(brand, year);
        this.batteryLife = batteryLife;
    }
}
let car1 = new Car("m5 f90 COMPETION", 2022);
let car2 = new Car("BMW", 2020);

let electricCar = new ElectricCar("Tesla", 2023, 300);
car1.displayInfo(); 
car2.displayInfo(); 
electricCar.displayInfo(); 