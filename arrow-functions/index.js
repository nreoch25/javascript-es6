// no need for function
// implicit return
// retains lexical scope of this
const add = (a, b) => return a + b;

add(1, 2);

const team = {
  members: [ "Jane", "Bill" ],
  teamName: "Super Squad",
  teamSummary: function() {
    // arrow functions maintain lexical this
    return this.members.map(member => {
      return `${member} is on team ${this.teamName}`
    })
  }
}

const fibonacci = (n) => {
  if (n < 3) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
