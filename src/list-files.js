var AWS = require('aws-sdk');
// Set the Region
AWS.config.update({ region: 'us-east-2' });

s3 = new AWS.S3({ apiVersion: '2016-11-15' });

var params = {
	Bucket: 'test12345js',
	MaxKeys: 20,
	Delimiter: '/',
	Prefix: ''
};

s3.listObjects(params, function (err, data) {
	if (err) throw err;
	console.log(data);
});
