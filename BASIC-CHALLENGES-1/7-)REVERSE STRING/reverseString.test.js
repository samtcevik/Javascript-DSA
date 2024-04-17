const reverseString = require('./reverseString');
test("reverseString Test...", ()=>{
    expect(reverseString("samet")).toBe("temas");
    expect(reverseString("kuleli")).toBe("ileluk");
    expect(reverseString("ali")).toBe("ila");
});