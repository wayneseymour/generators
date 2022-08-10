function* stateMachine(state) {
  let transition
  while (true) {
    if (transition === 'INCREMENT') {
      state++
    }
    if (transition === 'DECREMENT') {
      state--
    }
    transition = yield state
  }
}
const iterator = stateMachine(0);
iterator.next()
iterator.next('INCREMENT')
iterator.next('INCREMENT')
iterator.next('DECREMENT')
