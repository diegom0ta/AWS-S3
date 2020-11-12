const fs = require('fs');
// Load the SDK para JavaScript
var AWS = require('aws-sdk');
// Set the Region
AWS.config.update({ region: 'us-east-2' });

s3 = new AWS.S3({ apiVersion: '2016-11-15' });

const fileContent = fs.readFileSync('src/index.js');

var params = {
	Bucket: 'test12345js',
	Key: 'index.js',
	Body: fileContent
};
s3.upload(params, function (err, data) {
	console.log(err, data);
});
