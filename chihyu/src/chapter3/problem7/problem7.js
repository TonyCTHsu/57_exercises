// reference: https://github.com/flatiron/prompt
var prompt = require('prompt');

/*
 * Input
 */
// structure of prompt: 
// prompt.message + prompt.delimiter + property.message + prompt.delimiter
// to change property.message value: change description value
var schema = {
	properties: {
		length: {
			pattern: /^[1-9]\d*$/,
			message: 'It must be a positive number!',
			description: 'What is the length of the room in feet?',
			required: true
		},
		width: {
			pattern: /^[1-9]\d*$/,
			message: 'It must be a positive number!',
			description: 'What is the width of the room in feet?',
			required: true
		}
	}
};

prompt.message = '';
prompt.delimiter = '';
prompt.colors = false; // disable default prompt font color

prompt.start();
prompt.get(schema, (err, result) => {
	var roomArea = roomAreaCalculator(Number(result.length), Number(result.width));
	outputMessage(roomArea, result.length, result.width);
});


/* 
 * Processing
 */
var roomAreaCalculator = (length, width) => {
	let feet = width * length;
	let meter = feet * 0.09290304;
	return [feet, meter];
}


/*
 * Output
 */
var outputMessage = (area, length, width) => {
	let outMessage = `You entered dimensions of ${length} feet by ${width} feet.\n` + 
	`The area is \n${area[0]} square feet \n${area[1]} square meters`;

	console.log(outMessage);
}

