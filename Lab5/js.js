
let canvas = document.getElementById('canvasInAPerfectWorld');
let context = canvas.getContext('2d');
let baseImg = new Image();

makeBase();
function makeBase() {
    baseImg.src = 'images/steering.jpg';
    baseImg.onload = function () {
        context.drawImage(baseImg,0,0,100,100);
    }
}

let degrees = Math.PI; //3.14
canvas.addEventListener('mousedown',function () {
    context.save(); //current state
    context.clearRect(0, 0, 500, 500); //transparent black, erasing any previously drawn content.
    context.translate(50,50); //moving the canvas and its origin x horizontally and y vertically
    context.rotate(degrees);
    degrees += 1;
    context.drawImage(baseImg, -50, -50, 100, 100); //put image on canvas
    context.restore();
});

//my jquery version
/*let degrees = Math.PI; //3.14
$(document).ready(function () {
    $('#canvasInAPerfectWorld').mousemove(function () {
        context.save(); //current state
        context.clearRect(0, 0, 500, 500); //transparent black, erasing any previously drawn content.
        context.translate(50,50); //moving the canvas and its origin x horizontally and y vertically
        context.rotate(degrees);
        degrees += 1;
        context.drawImage(baseImg, -50, -50, 100, 100); //put image on canvas
        context.restore();
    });
});*/


//Buttons icon change
$('#btn1').click(function () {
    $(this).find('i').toggleClass('fa-parking fa-car');
});

$('#btn2').click(function () {
    $(this).find('i').toggleClass('fa-play fa-pause');
});

$('#btn3').click(function () {
    $(this).find('i').toggleClass('fa-map-marker fa-close');
});

$('#btn4').click(function () {
    $(this).find('i').toggleClass('fa-wifi fa-close');
});

$('#btn5').click(function () {
    $(this).find('i').toggleClass('fa-bluetooth-b fa-close');
});