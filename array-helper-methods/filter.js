var products = [
  { name: "cucumber", type: "vegetable", quantity: 0, price: 1 },
  { name: "banana", type: "fruit", quantity: 10, price: 15 },
  { name: "celery", type: "vegetable", quantity: 30, price: 9 },
  { name: "orange", type: "fruit", quantity: 3, price: 5 }
];

var fruits = products.filter(product => {
  return product.type === "fruit";
});

var filteredFruit = products.filter(product => {
  return (
    product.type === "vegetable" && product.quantity > 0 && product.price < 10
  );
});

var post = { id: 4, title: "New Post" };
var comments = [
  { postId: 4, content: "awesome post" },
  { postId: 3, content: "it was okay" },
  { postId: 4, content: "neat" }
];

function commentsForPost(post, comments) {
  return comments.filter(comment => {
    return comment.postId === post.id;
  });
}

commentsForPost(post, comments);
