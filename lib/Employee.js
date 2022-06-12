class Employee {
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email
    }
    //method to get employee name
    getName() {
        return this.name;
    }
    //method to return employees id
    getId() {
        return this.id;
    }
    //method to return employees email
    getEmail() {
        return this.email;
    }
    //method to return employees role
    getRole() {
        return "Employee";

    }
  }

module.exports = Employee;