function totalVolume(argument){
   
    let sum=0; 
    let num;
    for(let i=0;i<argument.length;i++) {
        for(let j=0;j<1;j++) {
            num= argument[i][j]*argument[i][j+1]*argument[i][j+2];    
        }
        sum+=num;
    }    
    return(sum);
}
console.log(totalVolume([[4,2,4],[3,3,3],[1,1,2],[2,1,1]]));
console.log(totalVolume([[2,2,2],[2,1,1]]));
console.log(totalVolume([[1,1,1],[1,1,1]]));