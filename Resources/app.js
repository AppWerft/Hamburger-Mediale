(function() {
	// Model
	var TwitterApp = require('model/twitter_adapter');
	Ti.App.Twitter = new TwitterApp();
	// View
	require('ui/start').create();
})();
