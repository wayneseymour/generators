/*
From: https://egghead.io/lessons/javascript-use-javascript-es6-generators-with-promises-to-handle-async-flows
*/
import fetch from 'node-fetch'

const url = 'https://api.quotable.io/random'

function createQuoteFetcher(endpoint) {
  return function* createQuoteFetcherInner() {
    const response = yield fetch(endpoint)
    const quote = yield response.json()
    return `${quote.content} -${quote.author}`
  }
}

const coroutineP = (gen) => {
  // Instantiate the generator.
  const generator = gen();

  // Recursively handle resuming the generator
  const handle = (result) => {
    // Exit case: If done is truthy, dont keep trying to resume the generator.
    // Instead, resolve the value (iterator result) of .next();
    if (result.done) {
      return Promise.resolve(result.value)
    }
    return Promise.resolve(result.value)
      .then(res => {
        // Resume generator using .next() and passing the response back into the generator.
        return handle(generator.next(res))
      });
  }

  return handle(generator.next());
}

coroutineP(createQuoteFetcher(url))
  .then(quote => console.log(quote))




