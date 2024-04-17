const reverseString = (str) => [...str].map((val, index, revArray) => {
   return revArray[revArray.length - 1 - index];
}).join('');

module.exports = reverseString;