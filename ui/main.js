console.log('Loaded!');

img=document.getElementById("madi");
var marginLeft = 0;
function moveLeft(){
    marginLeft=marginLeft + 6;
    img.style.marginLeft=marginLeft + "px";
}
img.onclick=function(){
var interval=setInterval(moveLeft,30);
   
};
var button=document.getElementById('counter');
var counter = 0;
button.onclick = function(){
    
    var request= new XMLHttpRequest();
    
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){
            if(request.status === 200){
                var counter =request.responseText;
                var span=document.getElementById('count');
    span.innerHTML = counter.toString();                
            }
        }
    };
    
    request.open('GET','http://sanjayrjs16.imad.hasura-app.io/counter',true);
    request.send(null);
    
     
};