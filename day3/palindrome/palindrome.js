let textbox=document.querySelector("#Num")

let button=document.querySelector("#numberchecker");

let para=document.createElement("p")

let div=document.getElementById("number")


button.addEventListener("click",(e)=>{
    let str=textbox.value;
    let revstr = []; 
    div.appendChild(para)
    para.style.fontSize="25px"
    para.style.animation="glowyellow 1.5s infinite";
    para.style.backgroundColor="#282c34"
    para.style.padding="10px"
    para.style.borderRadius="10px"
for(let i = str.length - 1; i >= 0; i--) {
    revstr+=str[i] 
}
if(revstr===str)
{
    para.innerHTML=`${str} is Palindrome`
para.style.animation="glowgreen 1.5s infinite";
}
else if(revstr!==str){
    para.innerHTML=`${str} is Not Palindrome`
para.style.animation="glowred 1.5s infinite";
}
else if(str===""){
    para.innerHTML=`Enter a proper string`
}
})
textbox.addEventListener("keydown",(e)=>{
    if(e.key==="Enter"){
    let str=textbox.value;
    let revstr = []; 
    div.appendChild(para)
    para.style.fontSize="25px"
    para.style.animation="glowyellow 1.5s infinite";
    para.style.backgroundColor="#282c34"
    para.style.padding="10px"
    para.style.borderRadius="10px"
for(let i = str.length - 1; i >= 0; i--) {
    revstr+=str[i] 
}
if(revstr===str)
{
    para.innerHTML=`${str} is Palindrome`
para.style.animation="glowgreen 1.5s infinite";
}
else if(revstr!==str){
    para.innerHTML=`${str} is Not Palindrome`
para.style.animation="glowred 1.5s infinite";
}
else if(str===""){
    para.innerHTML=`Enter a proper string`
}}
})