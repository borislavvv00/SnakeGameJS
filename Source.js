(function(window,document)
 {
 	canvas = document.getElementById("map");
	context = canvas.getContext("2d");
	document.addEventListener("keydown", GetKeyboardCommand);
	var btn = document.getElementById("walls");
	var btnClick = 0;
	btn.onclick = function ()
	{
		if(btnClick % 2 == 0)
		{
			btn.innerHTML = "wallsOn";
			Snake.direction = "stop";
			create = true;
			drawWall = true;
		}
		else
		{
			btn.innerHTML = "wallsOff";
			Snake.direction = "stop";
			create = false;
			drawWall = false;
		}
		btnClick++;
	}
	if(gameOver == false)
	{
		setInterval(DrawGameElements,1);
	}
 }
)(window,document);
