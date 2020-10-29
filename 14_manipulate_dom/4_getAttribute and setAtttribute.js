// get and set attributes of elements. This is for elements that dont have shrotcuts



// get the input of type range
// it is as below in html 
<input type="range" min="100" max="500" step="50" />

const range = document.querySelector('input[type="range"]')
range.getAttribute('max') // return 500
range.setAttribute('max','600');

// we can add a new attribute

range.setAttribute('type','radio') // add new radio type

