const isPalindrome = require('./isPalindrome');
test("isPalindrome Test...", ()=>{
    expect(isPalindrome("madam")).toBe(true);
    expect(isPalindrome("kuleli")).toBe(false);
    expect(isPalindrome("kazak")).toBe(true);
});