const randomEye = require("./script");
const POSSIBLE_VALUES = [1,2,3,4,5,6];

it("should give a random number between 1 and 6", () => {
    const result = randomEye();
    expect(POSSIBLE_VALUES).toContain(result);
    console.log("result " + result);
})