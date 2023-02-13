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


// declare array for all sections 
let sections = document.querySelectorAll('section')

//


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// declare function to create a new list item 
function addLi(title){
    let newLi = document.createElement('li')
    newLi.setAttribute('style', 'font-size: 1em; color: darkblue; padding: 12px 1em;')
    newLi.setAttribute('class', 'list-item')
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
addLi(sections[0].id)
addLi(sections[1].id)
addLi(sections[2].id)


// assign style properties to nav 
nav.setAttribute('style', 'background-color: #fff; height: 3em;')


// Add class 'active' to section when near top of viewport

window.addEventListener('scroll', sectionActive)

  function sectionActive(){
    // function to calculate srcoll height 
    let scroll = window.scrollY    
    if(scroll == sections[0].scrollTop){
      console.log('Section 1 active')
    }
    // if(scroll == 200){
    //   console.log('hello')
    // }
     
      console.log(scroll)     
    }  

// Scroll to anchor ID using scrollTO event
 

  window.addEventListener('click', (event)=>{
    const navItems = document.querySelectorAll('.list-item')
      
      if(event.target === navItems[0]){
        sections[0].scrollIntoView({
          behavior: 'smooth'
        })
        console.log('section 1')
      }
      if(event.target === navItems[1]){
        sections[1].scrollIntoView({
          behavior: 'smooth'
        })
        console.log('section 1')
      }
      if(event.target === navItems[2]){
        sections[2].scrollIntoView({
          behavior: 'smooth'
        })
        console.log('section 1')
      }
         

  })

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


