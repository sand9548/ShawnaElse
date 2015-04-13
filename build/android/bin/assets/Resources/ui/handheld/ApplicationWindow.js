function ApplicationWindow(title) {
	var self = Ti.UI.createWindow({
		title : title,
		backgroundColor : '#F3E2A9'
	});
	//Add picture!! and it works!
	var image1 = Ti.UI.createImageView({
		image : '/images/pixel.jpg',
		height : 237,
		width : 200,
		top : 20
	});
	self.add(image1);

	//add text
	var text1 = Ti.UI.createLabel({
		color : 'black',
		text : 'Shawna Else\nManagement and Human Resources\nelse6928@vandals.uidaho.edu\n907-723-4974\n',
		textAlign : 'center',
		textize : 16,
		style : 'bold',
		top : 270,
		width : 'auto'
	});
	self.add(text1);
	//create new page for further info
	var newWindow = Ti.UI.createWindow({
		backgroundColor : '#F3E2A9'
	});
	//create text for newWindow
	var newText = Ti.UI.createLabel({
		color : 'black',
		text : "About Me\n\I was born and raised in Juneau, Alaska, but moved to Moscow, Idaho, 3 years ago to pursue my college career. I am a senior at the University of Idaho! I will be graduating May 16th, 2015, with my Bachelors degree in Management & Human Resources with an emphasis in Management! I live with my cavalier King Charles Spaniel named Sketch and enjoy art as a past time. ",
		textAlign : 'left',
		top : 200,
		width : '80%'
	});
	newWindow.add(newText);
	var image2 = Ti.UI.createImageView({
		image : '/images/pix.jpg',
		width : 240,
		height : 170,
		top : 20
	});
	newWindow.add(image2);
	//create button for newWindow
	var button = Ti.UI.createButton({
		height : 44,
		width : 200,
		title : L('openWindow'),
		bottom : 20,
		backgroundColor : '#0B0B3B'
	});
	self.add(button);

	button.addEventListener('click', function() {
		//containingTab attribute must be set by parent tab group on
		//the window for this work
		self.containingTab.open(newWindow);
	});

	return self;
};

module.exports = ApplicationWindow;
