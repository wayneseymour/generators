
const main = state(incrX2/*?*/)
function* incr() {
  return (yield set((yield get) + 1))
}
function* incrX2() {
  return (yield* incr()) + (yield* incr())
}
// framework
function state(iter) {
  const i = iter()[Symbol.iterator]()
  return walk()

  function walk(arg) {
    const step = i.next(arg)
    return step.done ?
      state => [state, step.value] :
      state => {
        const [next, value] = step.value(state)
        return walk(value)(next)
      }
  }
}
function set(s) {
  return _ => [s, s]
}
function get(s) {
  return [s, s]
}
