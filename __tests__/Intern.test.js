const Intern = require("../lib/Intern");

//test to show school is set in the contructor
test("can set school in constructor", () => {
    const testValue = "UofT";
    const e = new Intern("Steve", 9, "test@test.com", testValue);
    expect (e.school).toBe(testValue);
});

//test for return engineer
test("getRole() should return \"Intern\" ", () => {
    const testValue = "Intern";
    const e = new Intern("Richard", 10, "test@test.com");
    expect(e.getRole()).toBe(testValue);
});

//test for getSchool()
test("Can get school via getSchool()", () => {
    const testValue = "UofT";
    const e = new Intern("Richard", 10, "test@test.com", testValue);
    expect(e.getSchool()).toBe(testValue);
  });