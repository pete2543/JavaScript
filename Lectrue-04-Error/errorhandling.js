function criticalCode() {
    throw "theowing an exception";
}

function logError(theException) {
    console.log(theException);
}

console.log("\n******************try.catch*************\n");

try {
    criticalCode();
}catch (ex){
    console.log("Got an Error");
    logError(ex);
}
console.log("\n******************throwing..in...try.Catch*************\n");
try {
    throw "An exception that is thrown every time";
}catch (ex){
    console.log("Got an error!");
    logError(ex);
}

console.log("\n******************try.Catch,,,Finally*************\n");

try{
    criticalCode();
}catch (ex){
    console.log("Got an error!");
    logError(ex);
}
finally {
    console.log("Code that always will run");
}
function hello() {
    console.log("\n**************throwing Exceptions**********\n");
}
