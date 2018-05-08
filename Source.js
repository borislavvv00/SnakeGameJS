(function(window,document)
 {
 	canvas = document.getElementById("map");
	context = canvas.getContext("2d");
	document.addEventListener("keydown", GetKeyboardCommand);
	if(gameOver == false)
	{
		setInterval(DrawGameElements,1);
	}
 }
)(window,document);