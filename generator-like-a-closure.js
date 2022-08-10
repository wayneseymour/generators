function* add(a/*?*/) {
  /*
  1. Yield A happens first, we are yielding our initial state
    the first time `.next()` is called (1st iteration).
  2. On our second iteration (`.next()` called), `b = yield a` and
    we are yielding `a + b`.
  */
  console.log(`\n### a: \n\t${a}`);
  const b = yield a;
  console.log(`\n### b: \n\t${b}`);
  yield a + b;
  // After this `value` will be undefined and
  // done will be true.
}
// Set initial state to 2 and return an async-generator-iterator.
// NOTE: Notice how the 1st console.log() statement hasn't executed yet.
const iterA = add(2)
// Observe initial state and
// the 1st console.log() statement finally runs.
console.log(iterA.next())
console.log('Result of setting b to 5: ', iterA.next(5))
console.log(iterA.next(10))
// console.log(iterA.next(3))
