console.log('Loaded!');
var counter=0;
var button=document.getElementById("button");

button.onclick=function(){
    counter=counter+1;
    var span=document.getElementById("counter");
    span.innerHTML=counter.toString();
};

