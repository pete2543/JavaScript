const book={
    title:"1984",
    aurhor:"George Orwell",
    isAvailable:false
};

const bookJSON=JSON.stringify(book);
console.log(bookJSON);

let Obook=JSON.parse(bookJSON);
console.log(Obook.title);
console.log(Obook);