function EatFood(foodSize)
{
	if(Food.X >= Snake.headX && Food.X <= Snake.headX + Snake.size && Food.Y >= Snake.headY && Food.Y <= Snake.headY + Snake.size)
	{
		score++;  
		timeBeforeSupperFood--;
		Snake.numberOfParts++;
		Food.X = Math.floor(Math.random() * (map.height - (Wall.size * 2 + 15))) + Wall.size + 10;
		Food.Y = Math.floor(Math.random() * (map.width - (Wall.size * 2 + 15))) + Wall.size + 10;
		if(foodSize == Food.supperFoodSize) // checkes if the eaten food was supper food
		{
			isTimeForSupperFood = true;
		}
	}
}

function ChooseFoodToDraw()
{
	if(timeBeforeSupperFood == 0) // draw supper food
	{
	//----------------------------------------Make supper food to flashing-------------------------------------------
		if(frameCount % 2 == 0) // even
		{
			Draw(context, Food.color, Food.Y, Food.X, Food.supperFoodSize, Food.supperFoodSize);
		}
		else // odd
		{
			Draw(context, Food.color, Food.Y - 5, Food.X - 5, Food.supperFoodSize + 5, Food.supperFoodSize + 5);
		}
	//---------------------------------------------------------------------------------------------------------------
		EatFood(Food.supperFoodSize);
		if(isTimeForSupperFood == true) // reset the time for supper food
		{
			timeBeforeSupperFood = 5;
			isTimeForSupperFood = false;
			score += 9;
		}
	}
	else // draw normal food
	{
		Draw(context, Food.color, Food.Y, Food.X, Food.normalFoodSize, Food.normalFoodSize);
		EatFood( Food.normalFoodSize);
	}
}

function TouchMapBorder()
{
	if(Snake.headX == 0)//top border
	{
		Snake.headX = map.height;
	}
	else if(Snake.headX == map.height)//bottom border
	{
		Snake.headX = 0;
	}
	else if(Snake.headY == 0)//left border
	{
		Snake.headY = map.width;
	}
	else if(Snake.headY == map.width)//rigth border
	{
		Snake.headY = 0;
	}
}

function TouchWall()
{
	for(var i = 0; i < Wall.possition.length; i++)
	{
		if(Snake.headX == Wall.possition[i].x && Snake.headY == Wall.possition[i].y)
		{
			Snake.direction = "stop";
		}	
	}
}

function CreateWall()
{
	for(var i = 0; i < 76; i++)
	{
		if(i == 0)
		{
			Wall.possition.push({ x : 0, y : i });
		}
		else if(i >= 1 && i <= 18)
		{
			Wall.possition.push({ x : 0, y : Wall.possition[i - 1].y + Wall.size + 1});
		}
		else if(i == 19)
		{
			Wall.possition.push({ x : map.height - Wall.size - 2, y : 0 });
		}
		else if(i >= 20 && i <= 38)
		{
			Wall.possition.push({ x : map.height - Wall.size - 2, y : Wall.possition[i - 1].y + Wall.size + 1 });
		}
		else if(i == 39)
		{
			Wall.possition.push({ x : 1 + Wall.size, y : 0 });
		}
		else if(i >= 40 && i <= 58)
		{
			Wall.possition.push({ x : 1 + Wall.possition[i - 1].x + Wall.size, y : 0 });
		}
		else if(i == 59)
		{
			Wall.possition.push({ x : 1 + Wall.size, y : map.width - Wall.size - 2});
		}
		else
		{
			Wall.possition.push({ x : 1 + Wall.possition[i - 1].x + Wall.size, y : map.width - Wall.size - 2});
		}
	}
}

function DestroySnake()
{
	while(Snake.tail.length != 0)
	{
		Snake.tail.splice(0, 1);
	}
	Snake.numberOfParts = 1;
}

function GameOver()
{
	if(isWallDrawed == true)
	{	
		if(Snake.headX == Wall.size || Snake.headX == map.height - Wall.size * 2|| Snake.headY == Wall.size || Snake.headY == map.width - Wall.size * 2)
		{
			isGameOver = true;
			Snake.direction = "stop";
		}
	}
}
