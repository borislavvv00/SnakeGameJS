var isGameOver = false;
var isTimeForSupperFood = false;//if now is supper food draw
var isWallCreate = false;
var isWallDrawed = false;
var frameCount = 0;
var frames = 1;
var timeBeforeSupperFood = 5;//count befor supper food
var score = 0;

function Draw(context, color, y, x, ySize, xSize) //Draw an element
{
	context.fillStyle = color;
	context.fillRect(y, x, ySize, xSize);
}

function DrawSnakeParts()
{
	while(Snake.tail.length > Snake.numberOfParts)//shift the unnecessary tail parts
	{
		Snake.tail.shift();
	}
	for(var i = 0; i < Snake.tail.length; i++)
	{
		if(i % 2 == 0)// even parts in one color
		{
			Draw(context, Snake.color, Snake.tail[i].y, Snake.tail[i].x, Snake.size, Snake.size);
		}
		else //odd parts in other color
		{	
			Draw(context, Snake.color1, Snake.tail[i].y, Snake.tail[i].x, Snake.size, Snake.size);
		}
	}
}

function DrawWalls()
{
	for(var i = 0; i < Wall.possition.length; i++)
	{
		Draw(context, Wall.color, Wall.possition[i].y, Wall.possition[i].x, Wall.size, Wall.size);
	}
}

function DrawGameOver()
{
	context.font = "30px Arial";
	context.fillStyle = "white";
	context.fillText("GAME OVER ",map.height / 2 - 100, map.width / 2 - 100);
}

function DrawGameElements()
{ 
	frameCount++;
	if(frameCount == frames)//push new tail part coordinates every 21 frames
	{	
		Snake.tail.push({x :Snake.headX, y : Snake.headY });
		frames += 21;
	}
//----------------------------Draw functions-----------------------------------------	
	Draw(context, "black", 0, 0, map.width, map.height);
	DrawSnakeParts();
	
	if(isWallCreate == true)
	{	
		CreateWall();
		isWallCreate = false;
	}
	
	if(isWallDrawed == true)
	{	
		DrawWalls();
	}
	ChooseFoodToDraw();
//---------------------------Game logic functions-------------------------------------
	if(isGameOver == false)
	{	
		Direction();
		TouchMapBorder();
		TouchWall();
		GameOver();
	}
	else
	{
		DrawGameOver();
	}
	document.getElementById("score").innerHTML = "score = " + score;
}
