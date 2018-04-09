fetch("http://www.google.com").then((response) => {
  return response.json();
}).then((data) => {
  console.log(data);
});
