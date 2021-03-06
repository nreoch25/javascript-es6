function* colors() {
  yield "red";
  yield "blue";
  yield "green";
}

// const gen = colors();
// gen.next(); { "value": "red", "done": false }
// gen.next(); { "value": "blue", "done": false }
// gen.next(); { "value": "green", "done": false }
// gen.next(); { "done": true }

const myColors = [];
for(let color of colors()) {
  myColors.push(color);
}

console.log(myColors);
