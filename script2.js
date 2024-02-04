// 2.https://github.com/rvsp/typescript-oops/blob/master/Practice/class-circle.md
// Solution
 class Circle{
    constructor(Radious,Color){
      this.Radious = Radious;
      this.Color = Color;
    }
    Area(){
        return `Area of the Circle 
        ${(Math.PI*(this.Radious*this.Radious))}`;
    }
    Circumference(){
        return `Circumference of the Circle 
        ${((2*Math.PI)*(this.Radious*this.Radious))}`;
    }
 }
 let C1 = new Circle(4,"orenge")
 console.log(C1.Area());
 console.log(C1.Circumference());