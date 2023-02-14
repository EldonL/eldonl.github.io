function myFunction() {
    document.getElementById("hiddenMessage").style.display = 'block';
}

function countDown() {
    var currentVal = document.getElementById("countDownButton").innerHTML;
    var newVal= 0;
    if (currentVal>0)
    {
        var newVal = currentVal - 1;
    }
        document.getElementById("countDownButton").innerHTML = newVal;
}

function TurnOnLight() {
    document.getElementById("myImage").src='BatPowerGif.gif';
}

function TurnOffLight(){
    document.getElementById("myImage").src='BookAliveIntro.PNG';
    
    
}