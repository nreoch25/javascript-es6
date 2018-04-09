function makeAjaxRequest(url, method = "GET") {
  // logic to make the request
  fetch(url, {
    method
  });
}

makeAjaxRequest("http://www.google.com");
makeAjaxRequest("http://www.google.com", "POST");

function User(id) {
  this.id = this.id;
}

function generateId() {
  return Math.random() * 99999999;
}

function createAdminUser(user = new User(generateId())) {
  user.admin = true;
  return user;
}

const user = new User(generateId());
createAdminUser(user);
