console.log('Loaded!');
var counter=0;
var button=document.getElementById("button");
var span=document.getElementById("counter");
button.onclick=function(){
    counter+=1;
    span.innerHTML=counter.toString();
};

