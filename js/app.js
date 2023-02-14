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
    // variable to hold all <li> in <nav> 
    const navItems = document.querySelectorAll('.list-item')

    // function to calculate srcoll height 
    let scroll = window.scrollY
    let header = document.querySelector('.main__hero')

    if(scroll > header.scrollHeight && scroll < sections[0].scrollHeight){
      sections[0].classList.toggle('your-active-class')
      console.log('Section 1 active')
    }
    if(scroll > sections[0].scrollHeight && scroll < sections[1].scrollHeight){
      sections[1].classList.toggle('your-active-class')
      console.log('Section 2 active')
    }
    if(scroll > sections[1].scrollHeight && scroll < sections[2].scrollHeight){
      sections[2].classList.toggle('your-active-class')
      console.log('Section 3 active')
    }
   
     
      console.log(scroll)     
    }  

// Scroll to anchor ID using scrollTO event
 

  window.addEventListener('click', (event)=>{
    const navItems = document.querySelectorAll('.list-item')
    
      for (let i=0; i <= navItems.length ; i++){
        if(event.target === navItems[i]){
          sections[i].scrollIntoView({
            behavior: 'smooth'
          })
          console.log('Scrolled to section 1')
        }
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


