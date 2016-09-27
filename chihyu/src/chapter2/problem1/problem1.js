// reference: https://github.com/flatiron/prompt
var prompt = require('prompt');

prompt.start();

console.log("What's your name?");
prompt.get(['name'], function(err, result) {
	console.log("Hello, " + result.name + "! Nice to meet you!");
});