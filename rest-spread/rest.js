// rest operator - places numbers into function arguments as an array
// rest operator - used to gather together variables into an array
function addNumbers(...numbers) {
  return numbers.reduce((sum, number) => sum + number, 0);
}

addNumbers(1, 2, 3, 4, 5, 6, 7);
// spread operator - takes all the elements and dumps them into a new array
const defaultColors = ["red", "green"];
const usedFavoriteColors = ["orange", "yellow"];
const fallColors = ["fire red", "fall orange"]
const allColors = ["blue", ..defaultColors, ...usedFavoriteColors, ...fallColors]


function validateShoppingList(...items) {
  if(items.indexOf("milk") < 0) {
    return [ "milk", ...items ]
  }
}

validateShoppingList("oranges", "bread", "eggs");


const MathLibrary = {
  calculateProduct(...rest) {
    return this.multiply(...rest)
  },
  multiply(a, b) {
    return a * b;
  }
};
