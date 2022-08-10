function* range(from, to) {
  while (from < to) yield from++
}

for (const x of range(0, 10)) {}

// console.log([...range(1, 20)])
