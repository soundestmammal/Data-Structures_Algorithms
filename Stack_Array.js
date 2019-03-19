
const word = 'peanut';
const stack = [];

// Push
stack.push(word);
console.log(stack);

// Push
stack.push("Flux Coffee");
console.log(stack);

// Size
console.log(stack.length);

// Peak
 var result = stack[stack.length - 1];
 console.log(result);

/*

Use a stack to test if a string is a palindrome:



*/

// Insert letters of word into a stack
var palindrome = [...word];
const plainStack = [];
var reverseWord = "";

palindrome.forEach(letter => {
    plainStack.push(letter);
});

console.log(plainStack);
// When I pop the letters, it will be in reverse order

palindrome.forEach(letter => {
    reverseWord = reverseWord + plainStack.pop();
});

console.log(reverseWord);

if (word == reverseWord) {
    console.log(`${word} is a palindrome!`);
} else {
    console.log(`${word} is not a palindrome`);
}

// Result : peanut is not a palindrome



