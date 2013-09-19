var Twitter = function(_options) {
	this.init(_options);
	return this;
};

Twitter.prototype.init = function(_options) {
	var Codebird = require("vendor/codebird");
	this.cb = new Codebird();
	this.cb.setConsumerKey('mqGVpZ4Z2glj1VR4XXVbw','VzpAMvX7LV9EM94pFGddvK87zo2s7ZUxL7z8gWHzo');
	var bearerToken = Ti.App.Properties.getString('TwitterBearerToken', null);
	var self = this;
	if (bearerToken == null) {
		this.fetch('oauth2_token', {}, function(reply) {
			var bearer_token = reply.access_token;
			self.cb.setBearerToken(bearer_token);
			Ti.App.Properties.setString('TwitterBearerToken', bearer_token);
		});
	} else {
		this.cb.setBearerToken(bearerToken);
	}
	function fetchTwitter() {
		self.cb.__call('search_tweets', "q=" + Ti.Network.encodeURIComponent("#medialehh"), function(reply) {
			Ti.API.info(reply);
		}, true // this parameter required
		);
	}

};

// 'search_tweets','#medialehh'

Twitter.prototype.fetch = function(_action, _needle, _callback) {
	this.cb.__call(_action, "q=" + Ti.Network.encodeURIComponent(_needle), function(reply) {
		if (reply.httpstatus == 200)
			_callback && _callback(reply)
		
	}, true // this parameter required
	);

};

module.exports = Twitter;
