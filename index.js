var noseenx=0;
var noseeny=0;

function preload()  {
    ymaj3=loadImage("sonrie.png")

    
}


function setup(
){
canvas=createCanvas(600,600);
canvas.position(110,250
    );
video=createCapture(VIDEO);
video.hide();

poseNet=ml5.poseNet(video, sed);
poseNet.on("pose", uuhaha);
}
function sed(){
console.log("copy")


}
function uuhaha(d0c3){
if (d0c3.length>0){

    console.log(d0c3);

    noseenx=d0c3[0].pose.nose.x-120;
    noseeny=d0c3[0].pose.nose.y-100;
}




}



function draw(){
image(video, 0,0, 600, 600);
image(ymaj3, noseenx , noseeny , 300, 340);

}

function take_snapshot(){ save('cuyo_gato.png');
 }
 

