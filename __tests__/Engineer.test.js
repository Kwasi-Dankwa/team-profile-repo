const Engineer = require("../lib/Engineer");


//test to see github is set in constructor
test("Can set GitHUb account via constructor", () => {
    const testValue = "GitHubUser";
    const e = new Engineer("James", 3, "test@test.com", testValue);
    expect(e.github).toBe(testValue);
  });
  
  test("getRole() should return \"Engineer\"", () => {
    const testValue = "Engineer";
    const e = new Engineer("James", 3, "test@test.com", "GitHubUser");
    expect(e.getRole()).toBe(testValue);
  });
  
  test("Can get GitHub username via getGithub()", () => {
    const testValue = "GitHubUser";
    const e = new Engineer("James", 3, "test@test.com", testValue);
    expect(e.getGithub()).toBe(testValue);
  });


//test for return engineer
test("getRole() should return \"Engineer\" ", () => {
    const testValue = "Engineer";
    const e = new Engineer("Michael", 3, "test@test.com");
    expect(e.getRole()).toBe(testValue);
});