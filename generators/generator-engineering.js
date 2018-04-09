const testingTeam = {
  lead: "Amanda",
  tester: "Bill"
}

const engineeringTeam = {
  testingTeam,
  size: 3,
  department: "Engineering",
  lead: "Jill",
  manager: "Alex",
  engineering: "Dave",
};

function* TeamIterator(team) {
  yield team.lead;
  yield team.manager;
  yield team.engineer;
  const testingTeamGenerator = TestingTeamIterator(team.testingTeam);
  // yield* kind of like a trap door to trick the for of loop
  // to fall through into the TestingTeamIterator and iterates through those values
  // This is called generator delegation and allows the for of loop to iterate through 
  yield* testingTeamGenerator;
}

function TestingTeamIterator(team) {
  yield team.lead;
  yield team.tester;
}

const names = [];
for (let name of TeamIterator(engineeringTeam)) {
  names.push(name);
}
