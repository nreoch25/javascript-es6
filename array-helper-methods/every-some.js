var computers = [
  { name: "Apple", ram: 24 },
  { name: "Compaq", ram: 4 },
  { name: "Acer", ram: 32 }
];

// every returns true if every element returns true
var allComputersCanRunProgram = computers.every(computer => {
  return computer.ram > 16;
});
// some returns true if atleast one returns true
var onlySomeComputersCanRunProgram = computers.some(computer => {
  return computer.ram > 16;
});

var names = ["Alex", "Matthew", "Joe"];

var allNamesLengthGreaterThan4 = names.every(name => {
  return name.length > 4;
});

var someNamesLengthGreaterThan4 = names.some(name => {
  return name.length > 4;
});

function Field(value) {
  this.value = value;
}
Field.prototype.validate = function() {
  return this.value.length > 0;
};

var username = new Field("2cool");
var password = new Field("my_password");
var birthdata = new Field("10/10/2010");

var fields = [username, password, birthday];
// use every helper to quickly check that all fields are valid
var formIsValid = fields.every(field => {
  return field.validate();
});

if (formIsValid) {
  // do logic
}
