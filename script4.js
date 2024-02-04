// 4.write a class to calculate the Uber price.
// Solution

class Uber{
    constructor(Name,Type,CarNumber,RatePerKilo,Distance){
    this.Name = Name;
    this.Type = Type;
    this.CarNumber = CarNumber;
    this.RatePerKilo = RatePerKilo;
    this.Distance = Distance;
    }
  price(){
    return `Uber price per kilometer 
    ${this.RatePerKilo * this.Distance}`;
  }
}
 let uber1 = new Uber("Jany Daniel","Sedan","TN75 A 45689",20,7.5);
 console.log(uber1.price());