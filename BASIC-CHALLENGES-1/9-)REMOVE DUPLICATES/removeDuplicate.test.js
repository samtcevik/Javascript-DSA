const removeDuplicate = require('./removeDuplicate');
test("removeDuplicate Test...", ()=>{
    expect(removeDuplicate(["kuleli","kuleli","kuleli","kuleli","samet"])).toBe(new Array("kuleli","samet"));
});