//waf to take any digit 0 to 9
//return its in word
// 0 - one
//5 - Five 

const word = (a) => {
    const words = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    return words[a];
}
console.log(word(0));
console.log(word(5));