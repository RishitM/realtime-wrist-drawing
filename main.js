function preload(){

};
function setup(){
canvas=createCanvas(500,600);
canvas.center()
video=createCapture(VIDEO);

};
function draw(){
    let c = color(0, 0, 245);
fill(c);
noStroke();
    square(100,100,100);
}