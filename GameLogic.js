function EatFood(foodSize)
{
	if(Food.X >= Snake.headX && Food.X <= Snake.headX + Snake.size && Food.Y >= Snake.headY && Food.Y <= Snake.headY + Snake.size)
	{
		score++;  
		timeBeforeSupperFood--;
		Snake.numberOfParts++;
		Food.X = (Math.floor(Math.random() * (map.height - (Wall.size + 5))) + Wall.size);
		Food.Y = (Math.floor(Math.random() * (map.width - (Wall.size + 5))) + Wall.size);
		if(foodSize == Food.supperFoodSize) // checkes if the eaten food was supper food
		{
			timeForSupperFood = true;
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
		if(timeForSupperFood == true) // reset the time for supper food
		{
			timeBeforeSupperFood = 5;
			timeForSupperFood = false;
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
			console.log("game over");
		}	
	}
}

function CreateWall()
{
	for(var i = 0; i < map.width; i++)
	{
		Wall.possition.push({ x : 0, y : i });
		Wall.possition.push({ x : map.height - Wall.size, y : i });
	}
	for(var i = 0; i < map.height; i++)
	{
		Wall.possition.push({ x : i, y : 0 });
		Wall.possition.push({ x : i, y : map.width - Wall.size });
	}
}

function GameOver()
{
	for(var i = 3; i < Snake.tail.length; i++)
	{
		if(Snake.headX == Snake.tail[i].x + Snake.size && Snake.headY > Snake.tail[i].y && Snake.headY < Snake.tail[i].y + Snake.size)
		{
			gameOver = true;
			Snake.direction = "stop";
			console.log("game over");
		}
	}
}
