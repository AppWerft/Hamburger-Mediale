exports.create = function() {;// this sets the background color of the master UIView (when there are no windows/tab groups on it)
	Titanium.UI.setBackgroundColor('#000');


	var win1 = Titanium.UI.createWindow({
		title : 'Tab 1',
		backgroundColor : '#fff'
	});
	win1.open();
	Ti.App.Twitter.fetch('search_tweets', 'medialehamburg', function(_response) {
		console.log(_response.statuses);	
	});
};

