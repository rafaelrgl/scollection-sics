SCollection.SICs = new Mongo.Collection('scollection_sics');
SCollection.SICs.allow({
	insert: function(userId, user, fields, modifier) {
		// TODO: security
		return true;
	},
	update: function(userId, user, fields, modifier) {
		// TODO: security
		return true;
	},
	remove: function(userId, user, fields, modifier) {
		// TODO: security
		return true;
	},
});
