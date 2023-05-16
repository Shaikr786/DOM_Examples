var firstDiv = document.getElementById("books");
var bookElements = [
    {
        name : 'Where the CrawdadsSing',
        author : 'Delia Owens' ,
        year : '1998'
    },
    {
        name : 'Heart Of Darkness' ,
        author : 'Joseph Conrad' ,
        year : '1899'
    },
    {
        name : 'The Overstory',
        author : 'Richard Poward' ,
        year : '2018'
    }
];
    bookElements.forEach(book => {
    var booksDiv = document.createElement("div");
    var booksNameDiv = document.createElement("div");
    var booksAuthorDiv = document.createElement("div");
    var booksYearDiv = document.createElement("div");

    booksNameDiv.innerHTML = book.name;
    booksAuthorDiv.innerHTML = book.author;
    booksYearDiv.innerHTML = book.year;

    booksDiv.setAttribute("class",'post');
    booksNameDiv.setAttribute("class",'post-name');
    booksAuthorDiv.setAttribute("class",'post-author');
    booksYearDiv.setAttribute("class",'post-year');

    booksDiv.appendChild( booksNameDiv);
    booksDiv.appendChild(booksAuthorDiv);
    booksDiv.appendChild(booksYearDiv);
    
    firstDiv.appendChild(booksDiv);
});


