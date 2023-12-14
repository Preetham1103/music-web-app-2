pokemon_song = "";
unstopable_song="";

function preload()
{
    pokemon_song = loadSound("pokemon.mp3");
    unstopable_song = loadSound("unstopable.mp3");
}

function setup()
{
    canvas = createCanvas(500, 400);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video, 0, 0, 600, 500);
}