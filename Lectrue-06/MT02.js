function highestDigit(num){
   
    const number= num.toString().split('').sort().reverse();
    const num1=  parseInt(number);
    return(num1);
}
console.log(highestDigit(359));
console.log(highestDigit(2));
console.log(highestDigit(377401));