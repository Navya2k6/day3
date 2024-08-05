let textbox=document.querySelector("#Num")

let button=document.querySelector("#numberchecker");

let para=document.createElement("p")

let div=document.getElementById("number")

button.addEventListener("click",()=>{
    var Num=textbox.value;
var result=Num;
  div.appendChild(para)
  para.style.fontSize="20px"
  para.style.backgroundColor="#282c34"
  para.style.padding="10px"
  para.style.borderRadius="10px"
 for (let i = Num-1; i >= 1; i--) {
 result=result*i;
 }
 para.innerHTML=`Factorial of ${Num} is ${result}`
});


textbox.addEventListener("keydown",(e)=>{
  if(e.key==="Enter"){
  var Num=textbox.value;
var result=Num;
div.appendChild(para)
para.style.fontSize="20px"
para.style.backgroundColor="#282c34"
para.style.padding="10px"
para.style.borderRadius="10px"
for (let i = Num-1; i >= 1; i--) {
result=result*i;
}
para.innerHTML=`Factorial of ${Num} is ${result}`}
});