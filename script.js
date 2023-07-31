let buttonRef=document.getElementById("aqua");
let buttonRef2=document.getElementById("teal");
let buttonRef3=document.getElementById("pink");
let buttonRef4=document.getElementById("purple");
let buttonRef5=document.getElementById("colorless");
let divRef=document.querySelector("div");
buttonRef.onclick=function(){
   divRef.style.backgroundColor="aqua";
   divRef.innerHTML="aqua";
 }

 buttonRef2.onclick=function(){
    divRef.style.backgroundColor="teal";
    divRef.innerHTML="teal";
     
  }
  buttonRef3.onclick=function(){
    divRef.style.backgroundColor="pink";
    divRef.innerHTML="pink";
     
  }
  buttonRef4.onclick=function(){
    divRef.style.backgroundColor="purple";
    divRef.innerHTML="purple";
     
  }
  buttonRef5.onclick=function(){
    divRef.style.backgroundColor="white";
    divRef.innerHTML="colorless";
    }