// Add interactivity to hamburger menu, so that when a user clicks on the hamburger menu, a dropdown menu is shown if the menu items are currently hidden. If the menu items are currently showing, hide the menu items.

// Steps for DOM Manipulation:
// 1. Identify the event target, i.e. the element that listens/waits for a specific event to happen to it.

// 2. Identify the action to be completed when the event happens by writing the event handler, i.e. the function that runs when the event is fired on the specified target.

// 3. Bind/attach the target element from step 1 to the event and the event handler function from step 2 through an event listener.



// 1. Select the hamburger icon.
const hamburgerIcon = document.querySelector(".menu-icon");

// 2. Write the event handler to show or hide the menu.
const toggleMenu = function() {
    // Toggle the class open on the navbar
    const menuItems = document.querySelector(".navbar");
    menuItems.classList.toggle("open");
}

// 3. Use .addEventListener to attach the hamburger icon to the event of a mouse click, and the above event handler function.
hamburgerIcon.addEventListener("click", toggleMenu);
