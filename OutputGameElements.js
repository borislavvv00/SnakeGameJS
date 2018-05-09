var gameOver = false;
var timeBeforeSupperFood = 5;//count befor supper food
var score = 0;
var timeForSupperFood = false;//if now is supper food draw
var frameCount = 0;
var frames = 1;
var create = false;
var drawWall = false;

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

function DrawGameElements()
{ 
	if(create == true)
	{	
		CreateWall();
		create = false;
	}
	frameCount++;
	if(frameCount == frames)//push new tail part coordinates every 21 frames
	{	
		Snake.tail.push({x :Snake.headX, y : Snake.headY });
		frames += 21;
	}
	Draw(context, "black", 0, 0, map.width, map.height);
	DrawSnakeParts();
	if(drawWall == true)
	{	
		DrawWalls();
	}
	Direction();
	TouchMapBorder();
	TouchWall();
	ChooseFoodToDraw();
	//GameOver();
	document.getElementById("score").innerHTML = "score = " + score;
}
