function getRandomLetters():string{
    const lettersToGenerate = "abcdefghijklmnopqrstuvwxyz";
    const randomIndex = Math.floor(Math.random() * lettersToGenerate.length);
    const currentLetterIndex = lettersToGenerate[randomIndex];
    return currentLetterIndex;
}

export {getRandomLetters};