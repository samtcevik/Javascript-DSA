const GetCharCount = (str, chr) => {
    let count = 0;
    [...str].map((i) => {
        return chr.toUpperCase() == i.toUpperCase() ? count++ : count;
    });
    
    return count;
}

module.exports = GetCharCount;