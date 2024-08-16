//Whale Talk - Dev30 Project

var input = 'Education is the key.';
input = input.toLowerCase();

const vowels = ['a', 'e', 'i', 'o', 'u'];

var resultArray = [];

for (let i = 0; i < input.length; i++) {
    const inputLetters = input[i];
    // console.log(inputLetters)

    if (inputLetters === 'e') {
        resultArray.push(input[i]);
    } 

    if (inputLetters === 'u') {
        resultArray.push(input[i])
    }

    for (let j = 0; j < vowels.length; j++) {
        const vowelLetters = vowels[j];
        // console.log(vowelLetters)

        if (inputLetters === vowelLetters) {
            // console.log(inputLetters)
            
            resultArray.push(vowelLetters);
        }
    }
};

// console.log(resultArray);

var resultString = resultArray.join('').toUpperCase();

console.log(resultString)
