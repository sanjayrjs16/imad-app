console.log('Loaded!');
var element = document.getElementById("main-text");
element.innerHTML ="Dino bwooy";
img=document.getElementById("madi");
var marginLeft = 0;
function moveLeft(){
    marginLeft=marginLeft + 10;
    img.style.marginLeft=marginLeft + "px";
}
img.onclick=function(){
var interval=setinterval(moveLeft,100);
   
}