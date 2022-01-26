function createQuote(quote,calldack) {
    let myQuote = "Like I always say, "+quote;
    calldack(myQuote);
}

function logQuote(quote) {
    console.log(quote+'Yes..');
}

createQuote(" you will getting better!",logQuote);
