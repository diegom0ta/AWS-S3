// Load the SDK para JavaScript
var AWS = require('aws-sdk');
// Set the Region
AWS.config.update({ region: 'us-east-2' });

s3 = new AWS.S3({ apiVersion: '2016-11-15' });

// Call S3 to list the buckets
s3.listBuckets(function (err, data) {
	if (err) {
		console.log('Error', err);
	} else {
		console.log('Success', data.Buckets);
	}
});
