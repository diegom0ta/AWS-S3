// Load the SDK para JavaScript
var AWS = require('aws-sdk');
// Set the Region
AWS.config.update({ region: 'us-east-2' });

s3 = new AWS.S3({ apiVersion: '2016-11-15' });

var params = {
	Bucket: 'teste123js'
};

s3.deleteBucket(params, function (err, data) {
	if (err) console.log(err, err.stack);
	// an error occurred
	else console.log(data); // successful response
});
