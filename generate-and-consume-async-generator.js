// Create a Promise that resolves after ms time
const timer = function(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
};

// Repeatedly generate a number starting
// from 0 after a random amount of time

const source = async function* numberGenerator(limit) {
  let i = 0;
  while (true) {
    await timer(Math.random() * 1000);
    yield i++;
    if (i > limit) return;
  }
};
// Tie everything together
const run = async function() {
  const stream$ = source(10);

  for await (const n of stream$) {
    console.log(n);
  }
};

run();