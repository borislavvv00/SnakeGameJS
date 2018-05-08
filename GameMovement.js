function  GetKeyboardCommand(event) //get keyboard commands and move the snake
{
		switch(event.keyCode)
		{
			case 37:
				MoveRules("right", "left");
				break;
			case 38:
				MoveRules("down", "up");
				break;
			case 39:
				MoveRules("left", "right");
				break;
			case 40:
				MoveRules("up", "down");
				break;
		}
}

function Direction() 
{
	switch(Snake.direction)
	{
		case "down":
			Snake.headX++;
			break;
		case "right":
			Snake.headY++;
			break;
		case "up":
			Snake.headX--;
			break;
		case "left":
			Snake.headY--;
			break;
	}
}

function MoveRules(p1, p2) // prevent to move up and then down or left and then rigth
{
	if(Snake.direction == p1)
	{
		Snake.direction = p1;
	}
	else 
	{	
		Snake.direction = p2;
	}
}