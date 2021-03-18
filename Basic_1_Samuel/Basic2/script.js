// Basic 2
// Create a class based on the Person class and add some other properties like salary, jobLocation and a function that will call the function that is inside the Person class and add “and I get (salary) every month, and I work in (jobLocation)”
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Persons = /** @class */ (function () {
    function Persons(firstname, lastname, age, job) {
        this.fName = firstname;
        this.lName = lastname;
        this.age = age;
        this.jobtitle = job;
    }
    Persons.prototype.showPersonsInformation = function () {
        return "Hello, my name is " + this.fName + " " + this.lName + " and I am " + this.age + ". I work as " + this.jobtitle + " ";
    };
    return Persons;
}());
var jobInfo = /** @class */ (function (_super) {
    __extends(jobInfo, _super);
    function jobInfo(fName, lName, age, jobtitle, jobsalary, jobLocation) {
        var _this = _super.call(this, fName, lName, age, jobtitle) || this;
        _this.salary = jobsalary;
        _this.jobLocation = jobLocation;
        return _this;
    }
    jobInfo.prototype.showExtendedInformation = function () {
        return _super.prototype.showPersonsInformation.call(this) + ("and I get " + this.salary + " every month, and I work in " + this.jobLocation);
    };
    return jobInfo;
}(Persons));
var loveleen = new jobInfo("Samuel", "Tenschert", 24, "Front End Developer", 5000, "IBM");
document.write(loveleen.showExtendedInformation());
