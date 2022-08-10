function* take(n, xs){
  var i = 0
  for (var x of xs) {
    if (n === i++) {
      return
    }
    yield x
  }
}

for (var x of take(3, [1,2,3,4,5])) {
  console.log(`\n### x: \n\t${x}`);
}


