/**
 * Returns a function that, when called,
 * returns a generator object that is immediately
 * ready for input via `next()`
 */
function coroutine(generatorF) {
  return function instantiateAndStart(...args) {
    const generator = generatorF(...args);
    generator.next();
    return generator;
  };
}
// To see how coroutine() works, let’s compare a wrapped generator with a normal one:

const wrapped = coroutine(function* () {
  console.log(`First input: ${yield}`);
  return "DONE";
});
const normal = function* () {
  console.log(`First input: ${yield}`);
  return "DONE";
};
wrapped().next('abc')
