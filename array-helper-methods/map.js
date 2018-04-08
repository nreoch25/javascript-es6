var numbers = [1, 2, 3];
// create new array to avoid mutating initial array\]
var doubled = numbers.map(number => {
  return number * 2;
});

var cars = [
  { model: "Buick", price: "Cheap" },
  { model: "Camaro", price: "expensive" }
];

var prices = cars.map(car => {
  return car.price;
});
