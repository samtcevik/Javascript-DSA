const reverseString = require('../7-)REVERSE STRING/reverseString');

const isPalindrome = (str)=>{
    return reverseString(str) === str;
}

module.exports = isPalindrome;

