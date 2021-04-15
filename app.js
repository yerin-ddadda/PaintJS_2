const canvas = document.getElementById("jscanvas");

let painting=false;

function stopPainting(){
    painting=false;
}

function onMouseMove(event){
    const x = event.offsetX;
    const y = event.offsetY;
    console.log(x,y);
}

function onMouseDown(event){
    painting=true;
}

function onMouseUp(event){
    stopPainting();
}


if(canvas){
    canvas.addEventListener("onmousemove", onMouseMove);
    canvas.addEventListener("onmousedown", onMouseDown);
    canvas.addEventListener("mouseup", onMouseUp);
    canvas.addEventListener("mouseleave",stopPainting);
}