const colors = ["red", "blue", "green"];

colors.forEach(color => {
  console.log(color);
});

const numbers = [1, 2, 3, 4, 5];
const sum = 0;
numbers.forEach(number => {
  sum += number;
});
console.log(sum);

function handlePosts() {
  var posts = [
    { id: 23, title: "Daily JS News" },
    { id: 52, title: "Code Refactor City" },
    { id: 105, title: "The Brightest Ruby" }
  ];

  // for (var i = 0; i < posts.length; i++) {
  //   savePost(posts[i]);
  // }
  posts.forEach(post => {
    savePosts(post);
  });
}

var images = [
  { height: 10, width: 30 },
  { height: 20, width: 90 },
  { height: 54, width: 32 }
];
var areas = [];

images.forEach(image => {
  areas.push(image.height * image.width);
});
