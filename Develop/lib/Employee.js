// TODO: Write code to define and export the Employee class
class Employee {
	constructor(name, id, email) {
        // name
        this.name = name;
        // id
		this.id = id;
        // email
		this.email = email;
	}

	printInfo() {
		console.log(`This employee's name is ${this.name}`);
        console.log(`This employee has an id of ${this.id}`);
        console.log(`This employee has an email of ${this.id}`);
	}
}
getName()
getId()
getEmail()
getRole('Employee') // Returns 'Employee'

module.exports = Employee;