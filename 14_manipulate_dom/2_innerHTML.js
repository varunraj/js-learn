// It not only return the text but also all other html element inside a node as a String.


const form = document.querySelector('form') // get first form element

form.innerHTML // this will return 

/*

"
    <input type="text" placeholder="Bear Name">
    <input type="password" placeholder="password">
    <input type="submit">
  "

*/

// below code will add new node inside form
form.innerHTML = " <input type='submit' placeholder='Bear Name'>" 

// update instead of delete and add new

const h1 = document.querySelector('h1')
h1.innerHTML += '<b> is cool </b>'  // update to existing contect 
h1.innerText += '<b> is cool </b>' // this wont add bold tag inside html


