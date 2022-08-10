function *main() {
	var x = yield "Hello World";

	yield x.toLowerCase();	// cause an exception!
}

var it = main();

it.next().value;			

try {
	it.next( 42 );
}
catch (err) {
	console.error(`### Got a type error: `, err);	
}