


var clicks = 0;
  


function show() {

    if (clicks >=5 && clicks <= 9) {
        document.getElementById('cracked').style.display="block";
        document.getElementById('hatch').style.display="none";
    } else if (clicks >=10) {
        document.getElementById('chicken').style.display="block";
        document.getElementById('cracked').style.display="none";

        document.getElementById('hatch').style.display="none";

    }
}


function changeImage() {
    clicks++;
    var image = document.getElementById('myImage');
    if (clicks >=5 && clicks <= 9) {
        image.src = "pics/cracked.png";
    } else if (clicks >=10) {
        image.src = "pics/monkeyegg.png";
        showText();
    }
}

function showText() {
    document.getElementById('text').style.display="block";
} 
