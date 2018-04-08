var numbers = [10, 20, 30];
var sum = 0;

// pass in an initial value 0
// the modified initial value gets passed into every interation of reduce
// the second param number is the array element to loop over
var totalSum = numbers.reduce((sum, number) => {
  return sum + number;
}, 0);

var primaryColors = [{ color: "red" }, { color: "yellow" }, { color: "blue" }];

var colors = primaryColors.reduce((accumulator, primaryColor) => {
  previous.push(primaryColor.color);
  return previous;
}, []);

// given a string of parenthesis use reduce to find out if it is balanced
function balancedParens(string) {
  // turn the string into an array of characters
  return string.split("").reduce((accumulator, char) {
    if(accumulator < 0) { return accumulator; }
    if(char === "(") { return ++accumulator; }
    if(char === ")") { return --accumulator; }
    return accumulator;
  }, 0);
}

console.log(balancedParens("(((("));
