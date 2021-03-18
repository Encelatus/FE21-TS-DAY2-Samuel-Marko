// Basic 2
// Create a class based on the Person class and add some other properties like salary, jobLocation and a function that will call the function that is inside the Person class and add “and I get (salary) every month, and I work in (jobLocation)”

class Persons{
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

class jobInfo extends Persons {
    salary: number;
    jobLocation: string;

    constructor (fName , lName, age, jobtitle, jobsalary, jobLocation) {
        super(fName, lName, age, jobtitle);
        this.salary = jobsalary;
        this.jobLocation = jobLocation;

    }

    showExtendedInformation (){
        return super.showPersonsInformation() + `and I get ${this.salary} every month, and I work in ${this.jobLocation}`
    }
}

var loveleen = new jobInfo ("Samuel", "Tenschert", 24, "Front End Developer", 5000, "IBM");
document.write(loveleen.showExtendedInformation());