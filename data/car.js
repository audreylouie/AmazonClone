class Car {
  #brand;
  #model;
  speed = 0;
  isTrunkOpen = false;

  constructor(carDetails) {
    this.#brand = carDetails.brand;
    this.#model = carDetails.model;
  }
  displayInfo() {
    return `${this.#brand} ${this.#model}: Speed: ${this.speed} km/h, Trunk Status: ${this.isTrunkOpen}`;
  }
  go(){
    if(this.isTrunkOpen ===  true){
      return;
    }
    this.speed += 5;
    if(this.speed > 200){
      this.speed = 200;
    }
    
  }
  break(){
    this.speed -= 0;
    if(this.speed < 0){
      this.speed = 0;
    }
  }
  openTrunk(){
    this.isTrunkOpen = true;
  }
  closeTrunk(){
    this.isTrunkOpen = false;
  }
}

class RaceCar extends Car {
  acceleration;
  constructor(carDetails){
    super(carDetails);
    this.acceleration = carDetails.acceleration;
  }
  go(){
    this.speed += this.acceleration;
    if(this.speed > 300){
      this.speed = 300;
    }
  }
}

const car1 = new Car({
  brand: 'Toyota',
  model: 'Corolla',
 
});

const car2 = new Car ({
  brand: 'Tesla',
  model: 'Model 3',
  
});

const raceCar1 = new RaceCar({
  brand: 'McLaren',
  model: 'F1',
  acceleration: 20
})

console.log(car1);
console.log(car2);
console.log(raceCar1);
raceCar1.go()
raceCar1.go()
car2.openTrunk();
car1.go();
car1.go();
car2.go();
car2.closeTrunk();
car2.go();
car1.go();
car1.break();
console.log(car1.displayInfo());
console.log(car2.displayInfo());
console.log(raceCar1.displayInfo());