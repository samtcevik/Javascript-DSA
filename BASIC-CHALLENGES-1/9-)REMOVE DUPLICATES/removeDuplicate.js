const removeDuplicate = (arr) => {
    return [...new Set(arr)];
}
console.log(removeDuplicate([1,1,1,2,2,3]));
module.exports = removeDuplicate;