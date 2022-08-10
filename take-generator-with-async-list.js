const take3 = take(3);
const take7 = take(7);
const generate10 = numberGenerator(10);

(async () => {
  // for await (const x of take3(generate10)) {
  for await (const x of take7(generate10)) {
  }
})();

function take(n) {
  var i = 0;
  return async function* takeCollection(xs) {
    for await (const x of xs) {
      if (n === i++) {
        return;
      }
      yield x;
    }
  };
}
async function* numberGenerator(limit) {
  let i = 0;
  while (true) {
    await timer(Math.random() * 1000);
    yield i++;
    if (i > 9) return;
  }
}
function timer(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
