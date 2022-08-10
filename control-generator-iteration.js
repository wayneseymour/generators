function* gen() {
  yield 1
  console.log('### after yielding 1');
}
const iterator = gen();
console.log(iterator.next());
console.log(iterator.next());

