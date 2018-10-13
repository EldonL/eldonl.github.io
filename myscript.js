var images =['SpideyHeroSwing.PNG','SpideyHeroGoblinBattle.PNG','SpideyHeroPufferFish.PNG','SpideyHeroWin.PNG'];
function nextImage() {
	var img = document.getElementById("slideimage");
	var imgname = img.name.split("_");
	var index = imgname[1];
	if(index ==images.length-1)
	{
		index =0; 
	}
	else
	{	
		index++;
	}
	img.src = images[index];
	img.name = "image_" + index; 
}