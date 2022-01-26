const names=['justin','Sarah','Christopher'];

console.log('------while--------');
let index=0;
while (index < names.length){
    const name=names[index];
    console.log(name);
}
//for loop

console.log('--for--');
for (let index = 0; index < array.length; index++) {
    const name = array[index];
    console.log(name);
}

//for of
console.log('--for of--');
for(let name of names){
    console.log(name);
}