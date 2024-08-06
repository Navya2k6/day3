const sumofdigits=(n)=>{
    let x=null;
    let sum=0;
       while (n!=0) {
           x=Math.floor(n%10)
           sum=sum+x;
           n=Math.floor(n/10)
       }
   
   return sum
   }

   let n=22;
   
   console.log(sumofdigits(n));