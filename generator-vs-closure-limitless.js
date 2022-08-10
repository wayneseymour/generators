// from: https://egghead.io/lessons/javascript-use-a-generator-like-a-closure

function* addingGenerator(a) {
  const b = yield a
  yield a + b
}
function addingClosure(a) {
  return (b) => {
    return a + b
  }
}
function* addingGeneratorLimitless(a) {
  let b = yield a
  while (true) {
    b = yield a + b
  }
}
const iterA = addingGenerator(2)// Set initial state to 2
console.log(iterA.next()) // Observe initial state
console.log(iterA.next(1)) // Add initial state + 1 = { value: 3, done: false }
console.log(iterA.next(2))
console.log(iterA.next(3))

const iterB = addingGeneratorLimitless(2)// Set initial state to 2
console.log(iterB.next()) // Observe initial state
console.log(iterB.next(1)) // Add initial state + 1 = { value: 3, done: false }
console.log(iterB.next(2))
console.log(iterB.next(3))
console.log(iterB.next(3))
console.log(iterB.next(3))
