var AWS = require('aws-sdk');
// Set the Region
AWS.config.update({ region: 'us-east-2' });

s3 = new AWS.S3({ apiVersion: '2016-11-15' });

var params = {
	Bucket: 'test12345js',
	Key: 'index.js'
};

s3.deleteObject(params, function (err, data) {
	if (err) console.log(err);
	else console.log('Successfully deleted file from bucket');
});
