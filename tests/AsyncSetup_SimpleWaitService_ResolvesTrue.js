//AsyncSetup_SimpleWaitService_ResolvesTrue.js: Testing logic.

define([
	"AsyncSetup",
	"promise",
	"wait"
], function(
	AsyncSetup,
	promise,
	wait
) {
	return {

		"Async": true,
		"Name":"AsyncSetup_SimpleWaitService_ResolvesTrue",
		"Input": function() {
			return function() {
				return promise(function( resolve ) {
					wait( 5 ).then(function() {
						resolve( true );
					});
				});
			};
		},
		"Function": AsyncSetup,
		"ExpectedOutput": true
	};
});
