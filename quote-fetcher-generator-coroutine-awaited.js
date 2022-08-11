/*
From: https://egghead.io/lessons/javascript-use-javascript-es6-generators-with-promises-to-handle-async-flows
*/
import fetch from 'node-fetch'
import co from 'co'

const url = 'https://api.quotable.io/random'

function createQuoteFetcher(endpoint) {
  return function* createQuoteFetcherInner() {
    const response = yield fetch(endpoint)
    const quote = yield response.json()
    return `${quote.content} -${quote.author}`
  }
}

const resumeGenerator = (gen) => {
  // Instantiate the generator.
  const generator = gen();

  // Recursively handle resuming the generator
  const handle = (result) => {
    // Exit case: if done is truthy, dont keep trying to resume the generator.
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

await resumeGenerator(createQuoteFetcher(url))
await co(createQuoteFetcher(url))





