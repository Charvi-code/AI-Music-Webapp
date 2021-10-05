song1="";
song2="";
function preload()
{
    song1= loadSound("harry_potter_theme.mp3");
    song2= loadSound("into-the-unknown.mp3");
}
function setup()
{
    canvas= createCanvas(500,350);
    canvas.center();
    video= createCapture(VIDEO);
    video.hide();
    song1.play();
    song2.play();
}
function draw()
{
    image(video, 0,0,500,350);
}