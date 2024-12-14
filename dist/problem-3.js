"use strict";
const countWordOccurrences = (sentence, word) => {
    const sentenceWords = sentence.toLocaleLowerCase().split(" ");
    const filterWord = word.toLocaleLowerCase();
    const result = sentenceWords.filter((w) => w === filterWord);
    return result.length;
};
console.log(countWordOccurrences("I love typescript typescript", "typescript"));
