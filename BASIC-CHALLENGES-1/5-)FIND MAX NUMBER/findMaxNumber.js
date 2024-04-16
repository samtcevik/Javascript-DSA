const findMaxNumber = (arr) => {
    let maxNumber = 0;

    arr.map((i) => {
        return maxNumber = i > maxNumber ?  i : maxNumber;
    });

    return maxNumber;
}

module.exports = findMaxNumber;

