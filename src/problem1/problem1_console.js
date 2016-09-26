// reference: https://github.com/flatiron/prompt
var prompt = require('prompt');

// spec of inputs (billAmount and tipRate)
var schema = {
	properties: {
		billAmount: {
			pattern: /^\d+(\.\d+)?$/,
			message: 'It should be a number (>=0)',
			required: true
		},
		tipRate: {
			pattern: /^\d+(\.\d+)?$/,
			message: 'It should be a number (>=0)',
			required: true
		}
	}
};


function calculateTip(billAmount, tipRate) {
	var result = [];
	result[0] = Math.round(billAmount * tipRate * 0.01);
	result[1] = result[0] + billAmount;
	console.log("Tip: $" + result[0]);
	console.log("Total: $" + result[1]);
}


// Main Program Starting Point
console.log("Enter bill amount and tip rate: ");

prompt.start();

prompt.get(schema, function(err, result) {
	calculateTip(Number(result.billAmount), Number(result.tipRate));
});