//AsyncSetup.js: Functional Logic.

define([
	"Setup",
	"promise"
], function(
	Setup,
	promise
) {
  return function( Input ) {
	return promise(function( resolve ) {
		resolve(Setup( Input ));
	});
  };
});
