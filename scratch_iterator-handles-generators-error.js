function *main() {
	var x = yield "Hello World";

	// never gets here
	console.log( x );
}

const it = main();

it.next();

try {
	// will `*main()` handle this error? we'll see!
	it.throw( "Oops" );
}
catch (err) {
	// nope, didn't handle it!
  console.error(`\n### err: \n\t${err}`);
}