// 3.Write a “person” class to hold all the details.
// Solution

class person{
    constructor(Name,FathersName,Age,Gender,DateOfBirth,Height,Weight,Qualification,MaritalStatus){
    this.Name = Name;
    this.FathersName = FathersName;
    this.Age = Age;
    this.Gender = Gender;
    this.DateOFBirth = DateOfBirth;
    this.Height = Height;
    this.Weight = Weight;
    this.Qualification = Qualification;
    this.MaritalStatus = MaritalStatus;
    }
}
let p1 = new person("Jany Daniel","John Thomas Seelan","27","Male","01-01-1997","170cm","70kg","BE computer science","Unmarried")
console.log(p1);