const titleCase = require('./titleCase');
test("TitleCase Test...", ()=>{
    expect(titleCase("samet çevik")).toBe("Samet Çevik");
    expect(titleCase("kuleli askeri lisesi")).toBe("Kuleli Askeri Lisesi");
    expect(titleCase("ali ata bak")).toBe("Ali Ata Bak");
});