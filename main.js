var difference
var leftWrist
var rightWrist
var nosex
var nosey 
 function preload(){

};
function setup(){
canvas=createCanvas(500,600);
canvas.center()
video=createCapture(VIDEO);
posenet=ml5.poseNet(video,modelLoaded);
posenet.on("pose",gotPoses)
};
function draw(){
 background("yellow")
fill(0, 0, 245);
    square(nosex,nosey,difference);
}
function modelLoaded(){
    console.log(ml5.version+' is ml5 version '+ ' Posenet Model is also loaded');
}
function gotPoses(results)
{
    if (results.length>0){
console.log(results);
leftWrist=results[0].pose.leftWrist.x;
rightWrist=results[0].pose.rightWrist.x;
nosex=results[0].pose.nose.x;
nosey=results[0].pose.nose.y;
console.log(leftWrist + "is x of left wrist");
console.log(rightWrist + "is x of right wrist");
console.log(nosex + "is x of nose" );
console.log(nosey + "is y of nose");
difference= leftWrist - rightWrist;
console.log(difference + " is the height and width of the square");
difference=floor(difference);
document.getElementById("ans").innerHTML = difference + "px"
}}