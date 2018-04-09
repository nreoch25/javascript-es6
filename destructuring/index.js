const expense = {
  type: "Business",
  amount: "$45 USD"
};

const { type, amount } = expense;

const savedFile = {
  extension: ".jpg",
  name: "repost",
  size: 14040
};

function fileSummary({ name, extension, size }) {
  return `The file ${name}.${extension} is of size ${size}`;
}

fileSummary(savedFile);

// destructuring works with arrays as well
const companies = {
  "Google",
  "Facebook",
  "Uber"
};
// pulls off array elements in order
// works great for accessing the first element of an array
const [ name, ...rest ] = companies;

const companies = [
  { name: "Google", location: "Mountain View" },
  { name: "Facebook", location: "Menlo Park" },
  { name: "Uber", location: "San Francisco" }
];
// use array and object destructuring to access nested properties
// this will get the location Mountain View
const [{ location }] = companioes

const Google = {
  locations: [ "Mountain View", "New York", "London" ]
};

const { locations: [ location ] } = Google;


// Practical example
// The order of the arguments doesn't matter just that you list the object props
function signup({username, password, email, dateOfBirth, city}) {
  // create new user

}
const userObject = {
  username: "myname",
  password: "mypassword",
  email: "myemail@example.com",
  dateOfBirth: "1/1/90",
  city: "New York"
}
signup(userObject);


const points = [
  [4,5],
  [10,1],
  [0,40]
];

const pointsObj = points.map(([x, y]) => {
  return { x, y };
});
