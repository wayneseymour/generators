// Return a new async iterator that applies a
// transform to the values from another async generator
const map = async function* transformIterables(f, xs) {
  for await (const x of xs)
    yield f(x)

  console.log('hi')
};

const asyncIterator$ = map((x) => x.toUpperCase(), ['a', 'b', 'c'])
asyncIterator$.next()
asyncIterator$.next()
asyncIterator$.next()
asyncIterator$.next()
// for await (let x of asyncIterator$) {}//?
