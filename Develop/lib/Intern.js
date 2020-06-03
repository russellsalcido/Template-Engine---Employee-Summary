// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require(".Employee/");

class Intern extends Employee {
  constructor(name, email, id, school) {
    super(name, id, email);
    this.school = school;
  }

}

getSchool()

getRole('Intern') // Overridden to return 'Intern'