

function setup()
{
    canvas = createCanvas(620, 480);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(620, 480);
    video.hide();

    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded()
{
    console.log("CoCoSSD Model Is Loaded");
}


function draw()
{
    image(video, 0, 0, 600, 500);
}