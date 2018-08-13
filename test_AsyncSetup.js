//test_AsyncSetup.js: Testing Logic.

define([
  "TestSuite",
  "log",
  "AsyncSetup",
  "tests/AsyncSetup_SimpleWaitService_ResolvesTrue"
], function(
  TestSuite,
  log,
  AsyncSetup,
  AsyncSetup_SimpleWaitService_ResolvesTrue
) {
  return TestSuite.extend({
    "initialize": function() {
      log("test_AsyncSetup initialized successfully!");
      var xTestSuite = this;
      xTestSuite.set( "MethodUnderTest", "AsyncSetup" );
          xTestSuite.add( AsyncSetup_SimpleWaitService_ResolvesTrue );  
      xTestSuite.test();
    }
  });
});
