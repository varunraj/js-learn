// INNER TEXT

// select the first h1 element
const h1 = document.querySelector('h1') 
// update the content
h1.innerText = "I am changing you"


const ul = document.querySelector('ul') 
ul.innerText // this will contain text from all li elements inside ul

/*
"First Thing
Second Thing
Third Thing"

*/
 

document.body.innerText // contain entire body text from all elements

// TEXT CONTENT

const h1 = document.querySelector('h1') 
// update the content
h1.textContent = "I am changing you"

// difference is that textContext will preserve indentation, formating etc.
// textContent will also show hiddern content (for display = none)
// innerText only show what text is diplayed in html page.
