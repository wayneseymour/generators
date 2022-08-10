// Iterator aux func
function run(gen) {
  const args = [].slice.call( arguments, 1);
  const it = gen.apply(null, args);
  const next = it.next();
  return next.value.then(
     (value) => it.next(value),
     (error) => it.throw(error)
  );
}

// Generator
function *readJSON() {
  try {
    // fetch returns a Promise
    const jsonContent = yield fetch('http://dog-api.kinduff.com');
     console.log(jsonContent);
  }
  catch (err) {
     console.error(err);
  }
}

run(readJSON);