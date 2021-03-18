/* Basic 1:

Create a class constructor named Person that should hold information about name, age,  jobTitle and have a function that will return a string “Hello there, My name is (name) and I am (age) years old, and I am a (jobTitle)” */

class Person{
fName: string;
lName: string;
age: number;
jobtitle: string;

constructor(firstname , lastname, age, job){
    this.fName = firstname;
    this.lName = lastname;
    this.age = age;
    this.jobtitle = job;

}

 showPersonsInformation(){

    return `Hello, my name is ${this.fName} ${this.lName} and I am ${this.age}. I work as ${this.jobtitle} `
}

}


var personInfo = new Person("Samuel", "Tenschert", 24, "Front End Developer");

console.log(personInfo.showPersonsInformation())






