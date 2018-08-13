//build.js: Configuration file for optimizing the AsyncSetup function. 
/*
*/ 
({
    paths: {
	"promise": "lib/promise.min",
	"Setup": "lib/setup.min",
	"rsvp": "lib/rsvp.min",
	"underscore": "lib/underscore.min"
    },
    exclude: [ "rsvp", "underscore" ],
    name: "AsyncSetup",
    out: "async_setup.min.js"
})
