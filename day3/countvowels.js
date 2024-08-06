const vowels=(str)=>{
    let count=0;
    let vowels='aeiou'
    let bigvowels=vowels.toUpperCase();
       for (let i = 0; i < str.length; i++) {
      for (let j = 0; j < vowels.length; j++) {
        if(str.charAt(i)===vowels.charAt(j)||str.charAt(i)===bigvowels.charAt(j))
            count++;
      }
      }
      return count;
      
     }
    let string="Pneumonia"
    
    console.log(vowels(string));