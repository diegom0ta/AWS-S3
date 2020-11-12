// Load the SDK para JavaScript
var AWS = require('aws-sdk');
// Set the Region
AWS.config.update({ region: 'us-east-2' });

s3 = new AWS.S3({ apiVersion: '2016-11-15' });
// Create the parameters for calling createBucket
var bucketParams = {
	Bucket: process.argv[2]
};

// call S3 to create the bucket
s3.createBucket(bucketParams, function (err, data) {
	if (err) {
		console.log('Error', err);
	} else {
		console.log('Success', data.Location);
	}
});
