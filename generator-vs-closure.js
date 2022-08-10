function* addingGenerator(a) {
  const b = yield a
  yield a + b
}
function addingClosure(a) {
  return (b) => {
    return a + b
  }
}
const add2Iterator = addingGenerator(2)
console.log(add2Iterator.next())
console.log(add2Iterator.next(1))
