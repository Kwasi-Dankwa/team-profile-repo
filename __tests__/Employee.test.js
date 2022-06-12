const Employee = require("../lib/Employee");

//testing to show employee is a created class
test("Can instantiate the Employee instance", () => {
    const e = new Employee();
    expect(typeof (e)).toBe("object");
});

//Testing the constructor argument
test("Name is set via constructor arguments", () => {
    const name = "Mark";
    const e = new Employee(name);
    expect(e.name).toBe(name);
});

test("id is set via constructor argument", () => {
    const testValue = 7;
    const e = new Employee("James", testValue);
    expect(e.id).toBe(testValue);
});

test("email is set via constructor argument", () => {
    const testValue = "test@test.com";
    const e = new Employee("James", 7, testValue);
    expect(e.email).toBe(testValue);
});

test("Can get name via getName()", () => {
    const testValue = "Mark";
    const e = new Employee(testValue);
    expect(e.getName()).toBe(testValue);
});

test("Can get id via getId()", () => {
    const testValue = 20;
    const e = new Employee("Kwasi", testValue);
    expect(e.getId()).toBe(testValue);
});

test("Can get email via getEmail()", () => {
    const testValue = "test@test.com";
    const e = new Employee("John", 40, testValue);
    expect(e.getEmail()).toBe(testValue);
});

test("getRole() should return \"Employee\" ", () => {
    const testValue = "Employee";
    const e = new Employee("Alice", 1, "test@test.com");
    expect(e.getRole()).toBe(testValue);
});



