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
let navItems = document.querySelectorAll('.list-item')



//


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// RUBRIC NEED: declare function to create a new sections
function addSection(title){
  let main = document.querySelector('#main-content')
  let newSection = document.createElement('section')
  newSection.setAttribute('id', `section${title}` )
  newSection.setAttribute('data-nav', `Section ${title}`)  
  newSection.innerHTML = `
  <div class="landing__container">
    <h2>Section ${title}</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>

    <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
  </div>`
  main.appendChild(newSection)
}

// RUBRIC NEED: build new section(s)
// create new section at the end of body
addSection(4)

// declare array for all sections 
let sections = document.querySelectorAll('section')

// RUBRIC NEED: declare function to create a new list item 
function addLi(title){
    let newLi = document.createElement('li')
    newLi.setAttribute('style', 'font-size: 1em; color: darkblue; padding: 1em 1em; height: 1em;')
    newLi.setAttribute('class', 'list-item')
    newLi.textContent = title
    ulNav.appendChild(newLi)   
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// RUBRIC NEED: build the nav
// create new list items inside <ul>
addLi(sections[0].id)
addLi(sections[1].id)
addLi(sections[2].id)
addLi(sections[3].id)







// assign style properties to nav 
nav.setAttribute('style', 'background-color: #fff; height: 3em;')


// RUBRIC NEED: Add class 'active' to section when near top of viewport  

  //listen for scroll
  window.addEventListener('scroll', ()=>{

    // function to calculate srcoll height 
    let scroll = window.scrollY
    let height = window.innerHeight

    //console.log the window scroll height every time you scroll
    console.log(scroll , height)

    //calculate the position of each section
    for (let i=0; i <= navItems.length ; i++){  
      let top1 = sections[0].getBoundingClientRect()      
      let top2 = sections[1].getBoundingClientRect()      
      let top3 = sections[2].getBoundingClientRect()  

      let listItems = document.querySelectorAll('.list-item')
      
      //change color of <li> based on active section
      // add or remove "active" class based on active section
      if (top1.top <= window.innerHeight && top1.bottom >= window.innerHeight){
        listItems[0].style.background = 'lightgrey'
        listItems[1].style.background = 'white'
        listItems[2].style.background = 'white'
        sections[0].classList.add('active')
        sections[1].classList.remove('active')
        sections[2].classList.remove('active')
      } else if (top2.top <= window.innerHeight && top2.bottom >= window.innerHeight){
        listItems[1].style.background = 'lightgrey'
        listItems[0].style.background = 'white'
        listItems[2].style.background = 'white'
        sections[1].classList.add('active')
        sections[0].classList.remove('active')
        sections[2].classList.remove('active')
      } else if (top3.top <= window.innerHeight && top3.bottom >= window.innerHeight){
        listItems[2].style.background = 'lightgrey'
        listItems[0].style.background = 'white'
        listItems[1].style.background = 'white'
        sections[2].classList.add('active')
        sections[0].classList.remove('active')
        sections[1].classList.remove('active')
      }    
    }
  })  


// RUBRIC NEED: Scroll to anchor ID using scrollTO event 

  window.addEventListener('click', (event)=>{
    const navItems = document.querySelectorAll('.list-item')
    
    //loop through each <li> in <nav> to listen for a click
      for (let i=0; i <= navItems.length ; i++){

        //if certain <li> is clicked, scroll to the corresponding section
        if(event.target === navItems[i]){
          sections[i].scrollIntoView({
            behavior: 'smooth'
          })        
                      
        //console log the id of the section that was scrolled to
        console.log(`Scrolled to ${sections[i].id}`)
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


