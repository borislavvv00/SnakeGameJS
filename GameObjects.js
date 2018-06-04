var Snake = 
{
	headX : map.height / 2,
	headY : map.width / 2,
	color : "darkgreen",
	color1 : "green",
	size : 20,
	direction : "stop",
	tail : [],
	numberOfParts : 1
};

var Wall = 
{
	color : "blue",
	possition : [],
	size : 20 
};

var Food = 
{
	X : 100,
	Y : 100,
	normalFoodSize : 7,
	supperFoodSize : 10,
	color : "red",
	color1 : "green"
};