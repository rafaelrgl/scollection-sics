Meteor.startup(function () {
	if (SCollection.SICs.find({}).count() < 1) {
		SCollection.SICs._ensureIndex({ "code": 1});
		SCollection.SICs._ensureIndex({ "description": 1});
		SCollection.SICs._ensureIndex({ "type": 1, "description": 1});
		var docs = JSON.parse(Assets.getText('private/scollection-sics.json'));
		var total = docs.length;
		var count = 0;
		docs.forEach(doc => {
			count = count + 1;
			console.log(`Importing scollection sics ${count} of ${total}`)
			SCollection.SICs.insert(doc);
		});
	}
});

SCollectionApi = new Restivus({
	apiPath: 'scollection/',
	version: 'sics',
	defaultHeaders: {
		'Content-Type': 'application/json'
	},
	useDefaultAuth: false,
	prettyJson: false,
	enableCors: true
});
