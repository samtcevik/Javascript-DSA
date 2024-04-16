const titleCase = (sentence) => sentence.split(' ').map(word => {
    let modifiedSentence = word[0].toUpperCase() + word.slice(1);
    return modifiedSentence;
}).join(' ');

module.exports = titleCase;