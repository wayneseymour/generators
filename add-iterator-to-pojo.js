const myObj = {
  name: 'Stanley',
  Job: 'Web Dev',
  age: 28
}

myObj[Symbol.iterator] = function* () {
  for (const prop in this) {
    yield this[prop];
  }
}

console.log([...myObj]); // > ["Stanley", "Web Dev", 28]
for (const val of myObj) {
  console.log(val)
}
