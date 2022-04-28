// HOMEWORK 8:
// Add interactivity to hamburger menu, so that when a user clicks on the hamburger menu, a dropdown menu is shown if the menu items are currently hidden. If the menu items are currently showing, hide the menu items.

// Steps for DOM Manipulation:
// 1. Identify the event target, i.e. the element that listens/waits for a specific event to happen to it.

// 2. Identify the action to be completed when the event happens by writing the event handler, i.e. the function that runs when the event is fired on the specified target.

// 3. Bind/attach the target element from step 1 to the event and the event handler function from step 2 through an event listener.



// 1. Select the hamburger icon.
const hamburgerIcon = document.querySelector(".menu-icon");

// 2. Write the event handler function to show or hide the menu.
const toggleMenu = function() {
    // Toggle the class open on the navbar
    const menuItems = document.querySelector(".navbar");
    menuItems.classList.toggle("open");
}

// 3. Use .addEventListener to attach the hamburger icon to the event of a mouse click, and the above event handler function.
hamburgerIcon.addEventListener("click", toggleMenu);


// HOMEWORK 9:
// Using DOM manipulation and DOM events, add 3 comic books each time user clicks a `Display More` button.

// Clicking the `Display More` button will populate the comic books data from the `comicBooks` array. If you click the button again, it will display another three of the same comic books from the array. When you refresh the page, the list of comic books will be restored to the starting state.

// Information on the comic books are provided in an array of objects:

const comicBooks = [
    {
        title: "Fun Home: A Family Tragicomic",
        author: "by Alison Bechdel",
        rating: "5 stars",
        href: "./fun-home.html",
        imgSrc: "/images/fun-home.jpg",
        imgAlt: "Fun Home: A Family Tragicomic comic book cover",
    },

    {
        title: "Hunter X Hunter Vol. 1",
        author: "by Yoshihiro Togashi",
        rating: "5 stars",
        href: "./hunter-x-hunter.html",
        imgSrc: "/images/hunter-x-hunter.jpg",
        imgAlt: "Hunter X Hunter comic book cover",
    },

    {
        title: "The Walking Dead, Vol. 1: Days Gone Bye",
        author: "by Robert Kirkman",
        rating: "4 stars",
        href: "./the-walking-dead.html",
        imgSrc: "/images/the-walking-dead.jpg",
        imgAlt: "The Walking Dead, Vol. 1: Days Gone Bye comic book cover",
    }
]

// 1. Select the "Display More" button
const displayMoreButton = document.querySelector(".display-more input");

// 2. Write an event handler function to add the data from the `comicBooks` array to the end of the comic book collection
const clickButton = function () {
    // console.log("I clicked the button!");
    // addSentence("This is a new sentence");
    // addComicInfo(comicBooks[0]);
    // addComicInfo(comicBooks[1]);
    // addComicInfo(comicBooks[2]);
    // addComicBook();
    addComicBooks();
}

// Create a function that adds the information about each comic book from comicBooks to the collection

// An arrow function passing the parameter comicBook into addComicBookInfo
const addComic = comicBook => addComicBookInfo(comicBook);

const addComicBooks = function () {
    // For each comic book in comicBooks pass in the function addComic
    comicBooks.forEach(addComic);
}

// Create a function that adds all comic information from comicBooks to the end of the array of index-entry divs

const addComicBookInfo = function (comicBook) {
    // Create a div 
    const div = document.createElement("div");

    // Add a class attribute of index-entry
    div.className = "index-entry";

    // Create an <a> element stored in a variable called link
    const link = document.createElement("a");

    // Add href attribute
    link.setAttribute("href", comicBook.href);

    // Append the link to the div
    div.appendChild(link);

    // Create an img stored in a variable called image
    const image = document.createElement("img");

    // Add src attribute
    image.setAttribute("src", comicBook.imgSrc);

    // Add alt attribute
    image.setAttribute("alt", comicBook.imgAlt);

    // Append the image to the link
    link.appendChild(image);
    
    // Create a span stored in a variable called title
    const title = document.createElement("span");

    // Add a class attribute of title
    title.className = "title";

    // Add comic book information to title's inner text
    title.innerText = comicBook.title;

    // Append the title to the div
    div.appendChild(title);

    // Create a span stored in a variable called author
    const author = document.createElement("span");

    // Add a class attribute of author
    author.className = "author";

    // Add comic book information to author's inner text
    author.innerText = comicBook.author;

    // Append the author to the div
    div.appendChild(author);

    // Create a span stored in a variable called rating
    const rating = document.createElement("span");

    // Add a class attribute of rating
    rating.className = "rating";

    // Add comic book information to rating's inner text
    rating.innerText = comicBook.rating;

    // Append the rating to the div
    div.appendChild(rating);

    // Create an <a> element stored in a variable called details
    const details = document.createElement("a");

    // Add href attribute
    details.setAttribute("href", comicBook.href);

    // Add inner text to details
    details.innerText = "Details";

    // Append the details to the div
    div.appendChild(details);

    // Show created div onto the DOM at the end of comicBooksList
    document.querySelector(".comic-collection").appendChild(div);
}

// 3. Use .addEventListener to bind the "Display More" button to the event of a mouse click, and the above event handler function

if (displayMoreButton) {
    displayMoreButton.addEventListener("click", addComicBooks);
};

// SCRATCHPAD SPACE: This is all work I did to break down the problem into smaller piece to figure out how to complete the task.

// Create a function that adds a sentence to new-div

// const addSentence = function (sentence) {
//     // Create a span element
//     const span = document.createElement("span");

//     // Add text and append to the element
//     span.appendChild(document.createTextNode(sentence));

//     // Show created element onto the DOM
//     document.querySelector(".new-div").appendChild(span);
// }


// Create a function that adds the title, author, and rating from comicBooks to new-div

// const addComicInfo = function (comicBook) {
//     // Create a span element
//     const span = document.createElement("span");

//     // Add title, author, and rating from comicBooks to the element's inner text
//     span.innerText = comicBook.title + ", " + comicBook.author + ", " + comicBook.rating;

//     // Show created element onto the DOM
//     document.querySelector(".new-div").appendChild(span);
// }