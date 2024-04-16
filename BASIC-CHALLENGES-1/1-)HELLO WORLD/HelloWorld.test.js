const helloWorld = require('./HelloWorld');
test('Hellow World Test...', () => {
    expect(helloWorld("Samet")).toBe("Hello World Samet");
    expect(helloWorld("Esma")).toBe("Hello World Esma");
    expect(helloWorld("Mia")).toBe("Hello World Mia");
  });

