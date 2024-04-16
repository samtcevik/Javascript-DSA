const calculator = require("./Calculator");
test("Calculator Test...", ()=>{
    expect(calculator(10,2,"+")).toBe(12);
    expect(calculator(10,2,"-")).toBe(8);
    expect(calculator(10,2,"/")).toBe(5);
    expect(calculator(10,2,"*")).toBe(20);
});