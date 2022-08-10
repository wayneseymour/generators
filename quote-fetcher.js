/*
From: https://egghead.io/lessons/javascript-use-javascript-es6-generators-with-promises-to-handle-async-flows
*/
import fetch from 'node-fetch'

const url = 'https://api.quotable.io/random'

function* createQuoteFetcher() {
  const response = yield fetch(url)
  const quote = yield response.json()
  return `${quote.content} -${quote.author}`
}

const fetcher = createQuoteFetcher();
// the value is a thenable, a promise
fetcher.next().value
  // at the fetcher.next(x) call, we are passing the promise response
  // back to the generator, stored at `const response`.
  // .then((promiseResponse) => fetcher.next(promiseResponse).value/*?*/)
  .then((promiseResponse) => {
    // .value below is a property of the iterator.  It also has the done property.
    return fetcher.next(promiseResponse).value/*?*/
  })
  .then((x) => {
    return fetcher.next(x).value
  })
