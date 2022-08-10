import fetch from 'node-fetch';

function foo(x,y) {
  console.log(x, y);

	return fetch("https://www.keycdn.com");
}

function *main() {
	try {
		var text = yield foo( 11, 31 );
		console.log( text );
	}
	catch (err) {
		console.error( err );
	}
}

var it = main();

var p = it.next().value;
console.log(`\n### p: \n${JSON.stringify(p, null, 2)}`);

(async () => {
	const x = await p;
	console.log(`\n### x: \n${JSON.stringify(x, null, 2)}`);
  console.log(`\n### x.status: \n\t${x.status}`);
})()

// // wait for the `p` promise to resolve
// p.then(
// 	function(text){
// 		it.next( text );
// 	},
// 	function(err){
// 		it.throw( err );
// 	}
// );
