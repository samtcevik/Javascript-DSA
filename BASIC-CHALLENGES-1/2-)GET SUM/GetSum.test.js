const getSum = require("./GetSum");
test("GetSum Test...", ()=>{
    expect(getSum(1,2)).toBe(3);
    expect(getSum(2,2)).toBe(4);
    expect(getSum(5,2)).toBe(7);
    expect(getSum(10,2)).toBe(12);
    expect(getSum(100,2)).toBe(102);
});

