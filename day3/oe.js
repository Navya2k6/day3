let textbox=document.querySelector("#Num")

let button=document.querySelector("#numberchecker");

let para=document.createElement("p")

let div=document.getElementById("number")

button.addEventListener("click",()=>{
    let Num=textbox.value;
    let button=alert("Button is clicked");
  div.appendChild(para)
  para.style.fontSize="25px"
  para.style.backgroundColor="#282c34"
  para.style.padding="10px"
  para.style.borderRadius="10px"
if(Num%2===0 && Num!=""){
para.innerHTML=`${Num} is Even Number`
}
else if(Num%2!=0){
para.innerHTML=`${Num} is Odd Number`
}
else{
  para.innerHTML=`Enter a proper Number`
}
});