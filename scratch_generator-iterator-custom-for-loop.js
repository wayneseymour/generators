const valueDripper = (function () {
  let nextVal;

  return {
    // needed for `for..of` loops
    [Symbol.iterator]: function () {
      return this;
    },

    // standard iterator interface method
    next: function () {
      if (nextVal === undefined) {
        nextVal = 1;
      } else {
        nextVal = 3 * nextVal + 6;
      }

      return { done: false, value: nextVal };
    },
  };
})();

valueDripper.next().value;
valueDripper.next().value;
valueDripper.next().value;
valueDripper.next().value;

for (let ret; (ret = valueDripper.next()) && !ret.done; ) {
  console.log(`### ret.value: ${ret.value}`);
  
  // don't let the loop run forever!
  if (ret.value > 500) {
    break;
  }
}
