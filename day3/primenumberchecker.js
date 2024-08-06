const prime=(num)=>{
    let prime=true
    if (num <= 1) return false; 
    if (num === 2) return true; 
    if (num % 2 === 0) return false;
for (let i = 3; i < num/2; i++) {
    if(num%i===0){
        prime=false
        break;
    }
}
return prime
}
let Number=45

if(prime(Number)){
    console.log(`${Number} is prime number`);
}
else{
    console.log(`${Number} is not prime number`);
    
}