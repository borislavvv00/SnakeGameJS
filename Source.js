(function(window,document)
 {
 	canvas = document.getElementById("map");
	context = canvas.getContext("2d");
	document.addEventListener("keydown", GetKeyboardCommand);
	
	var walls = document.getElementById("walls");
	var wallsClick = 0;
	walls.onclick = function ()
	{
		if(isGameOver == false)
		{
			if(wallsClick % 2 == 0)
			{
				walls.innerHTML = "wallsOn";
				Snake.direction = "stop";
				isWallCreate = true;
				isWallDrawed = true;
			}
			else
			{
				walls.innerHTML = "wallsOff";
				Snake.direction = "stop";
				isWallCreate = false;
				isWallDrawed = false;
			}
			wallsClick++;
		}
	}
	
	var restart = document.getElementById("restart");
	restart.onclick = function()
	{
		DestroySnake();
		score = 0;
		Snake.headX = map.height / 2;
		Snake.headY = map.width / 2;
		Snake.direction = "stop";
		Food.X = 100;
		Food.Y = 100;
		isGameOver = false;
	}
	
	setInterval(DrawGameElements, 1);
 }
)(window,document);
