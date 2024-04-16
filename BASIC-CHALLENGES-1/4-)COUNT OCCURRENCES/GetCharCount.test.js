const getCharCount = require("./GetCharCount");
test("Count Occurrences Test...", ()=>{
    expect(getCharCount("Samet","a")).toBe(1);
    expect(getCharCount("Ada","a")).toBe(2);
    expect(getCharCount("Adanalı","a")).toBe(3);
    expect(getCharCount("Kuleli","l")).toBe(2);
});