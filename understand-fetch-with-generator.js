/*
From: https://egghead.io/lessons/javascript-use-javascript-es6-generators-with-promises-to-handle-async-flows
*/
// import fetch from 'node-fetch'
const fetch = require('node-fetch')

const url = 'https://api.quotable.io/random'

function* createQuoteFetcher(endpoint) {
  const response = yield fetch(endpoint)
  const quote = yield response.json()
  return `${quote.content} -${quote.author}`
}

function* f(endpoint) {
  yield fetch(endpoint)
}
// Initialize state.
const iteratorResult = f(url).next()
// Grab the promise.
const thenable = iteratorResult.value;
// Pipe the body to stdout
thenable.then((x) => x.body.pipe(process.stdout));