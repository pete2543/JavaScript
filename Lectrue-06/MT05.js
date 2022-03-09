
function getBudget(x){
    let sum = 0;
    let number = x.reduce(function (age, current) {
        return age + current.budget
    }, sum)
    console.log(x);
    return number;
}
console.log(getBudget([
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve", age: 32, budget: 40000 },
    { name: "Martin", age: 16, budget: 2700 }
]));
console.log(getBudget([
    { name: "John", age: 21, budget: 29000 },
    { name: "Steve", age: 32, budget: 32000 },
    { name: "Martin", age: 16, budget: 1600 }
]));