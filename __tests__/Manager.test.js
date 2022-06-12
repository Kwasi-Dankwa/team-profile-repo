const Manager = require("../lib/Manager");

const Employee = require("../lib/Employee");

//test to show officNumber is set in constructor
test("can set officeNumber in constructor", () => {
    const testValue = 100;
    const e = new Manager("Steve", 9, "test@test.com", testValue);
    expect (e.officeNumber).toBe(testValue);
});

//test for return engineer
test("getRole() should return \"Manager\" ", () => {
    const testValue = "Manager";
    const e = new Manager("Steve", 9, "test@test.com", 100);
    expect(e.getRole()).toBe(testValue);
});