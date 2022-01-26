const arrayofNumber =[1,2,3,4];
const sum=arrayofNumber.reduce((accmulator,currentValue)=>{
    return accmulator+currentValue;
});

console.log(sum);//10