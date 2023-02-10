/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
// navigation element 
const nav = document.querySelector('.navbar__menu');

// unordered list inside navigation element 
const ulNav = document.querySelector('#navbar__list')

// all unordered list items (saved as an array)
let listItems = document.querySelectorAll('#list-item')

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// declare function to create a new list item 
function addLi(title){
    let newLi = document.createElement('li')
    newLi.setAttribute('style', 'font-size: 1em; color: darkblue; padding: 12px 1em;')
    newLi.setAttribute('id', 'list-item')
    newLi.textContent = title
    ulNav.appendChild(newLi)   
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// create new list items inside <ul>
addLi('one')
addLi('two')
addLi('three')


const firstItem = listItems[0]

// assign style properties to nav 
nav.setAttribute('style', 'background-color: #fff; height: 3em;')


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


