const findMaxNumber = require('./findMaxNumber');
test("FindMaxNumber Test...", ()=>{
    expect(findMaxNumber([2,4,5,9])).toBe(9);
    expect(findMaxNumber([21,4,57,9])).toBe(57);
    expect(findMaxNumber([2,4,51,9])).toBe(51);
});