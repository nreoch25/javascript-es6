// Generator is a function that can be entered and exited multiple times
function* shopping) {
  // stuff on the sidewalk
  // walking down the sidewalk

  // go into the store with cash
  // yield pauses execution of generator
  // transitioning from generator back out to code
  const struffFromStore = yield "cash";
  // walking to laundry place
  // transitioning from generator back out to code
  const cleanClothes = yield "laundry";
  // walking back home
  return [ struffFromStore, cleanClothes ];
}

// stuff in the store
const gen = shopping();
// next will execute all the generator code until it hits the yield statement
gen.next();  // leaving our house
// walked into the store
// waking up and down the aisles
// purchase our stuff

// transition back into the generator
// enter back into the generator
gen.next("groceries");  // leaving the store with groceries
// everytime there is a yield statement in the generator
// we need to call next to transition back into generator
gen.next("clean clothes"); // leaving the laundry with clean clothes
