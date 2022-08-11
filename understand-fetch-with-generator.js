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

function* f() {
  yield fetch(url)
}
const iteratorResult = f().next()
const thenable = iteratorResult.value;
thenable.then((x) => x.body.pipe(process.stdout));