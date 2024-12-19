//asking the user for the inout
let word1 = prompt("Enter the first word (RACECAR):");
let word2 = prompt("Enter the second word (RECORDER):");
//function holding the operation
function isPalin(word) {
    const reversed = word.split("").reverse().join("");
    console.log(`Original: ${word}, Reversed: ${reversed}`);
    return word === reversed;
}
//printing if the 2 input  are quivalent to the reversed string 
console.log(`Is "${word1}" a palindrome?`, isPalin(word1));
console.log(`Is "${word2}" a palindrome?`, isPalin(word2));
