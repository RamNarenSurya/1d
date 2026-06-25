let button1El=document.getElementById("button1")
let button2El=document.getElementById("button2")
let button3El=document.getElementById("button3")

let outputEl=document.getElementById("output");

button1El.addEventListener("click",function(){
    outputEl.textContent="You clicked the first button!";
    outputEl.style.color="red";

})
button2El.addEventListener("click",function(){
    outputEl.textContent="You clicked the second button!";
    outputEl.style.color="blue";
})
button3El.addEventListener("click",function(){
    outputEl.textContent="You clicked the third button!";
    outputEl.style.color="green";
})
