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

const coroutine = (gen) => {
  const generator = gen();

  const handle = (result) => {
    if (result.done) {
      return Promise.resolve(result.value)
    }
    return Promise.resolve(result.value)
      .then(res => handle(generator.next(res)));
  }

  return handle(generator.next());
}

const fetcher = coroutine(createQuoteFetcher(url))
  .then(quote => console.log(quote))




