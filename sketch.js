function setup(){
    createCanvas(600,600)
}
function draw(){
    stroke("blue");
    Fill("red");

    if(mouseIsPressed){
        rect(mouseX, MouseY, 20, 35);
    }
}