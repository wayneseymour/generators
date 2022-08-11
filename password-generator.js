// from: https://betterprogramming.pub/javascript-generators-practical-use-cases-945d512ef252

function* generateCharSequence(start, end) {
  for (let i = start; i <= end; i++) yield String.fromCharCode(i);
}
function* generateAPassword() {
  // 0..9
  yield* generateCharSequence(48, 57);
  // A..Z
  yield* generateCharSequence(65, 90);
  // a..z
  yield* generateCharSequence(97, 122);
}
let password = '';
for (let code of generateAPassword()) {
  password += code;
}
console.log('password : ', password);
// "password : ",
