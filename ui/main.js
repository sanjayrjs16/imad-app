console.log('Loaded!');

img=document.getElementById("madi");
var marginLeft = 0;
function moveLeft(){
    marginLeft=marginLeft + 6;
    img.style.marginLeft=marginLeft + "px";
}
img.onclick=function(){
var interval=setInterval(moveLeft,30);
   
}
var button=document.getElementById('counter');
button.onclick =function(){
    
    
    counter=counter+1;
    var span=document.getElementById('count');
    span.InnerHTML = counter.toString(); 
}