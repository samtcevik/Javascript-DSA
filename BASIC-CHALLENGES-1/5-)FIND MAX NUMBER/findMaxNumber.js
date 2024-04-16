const findMaxNumber = (arr) => {
    let maxNumber = 0;

    arr.map((i) => {
        maxNumber = i > maxNumber ?  i : maxNumber;

        return maxNumber;
    });

    return maxNumber;
}

module.exports = findMaxNumber;

