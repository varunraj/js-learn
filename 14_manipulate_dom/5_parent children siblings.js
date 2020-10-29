const firstLi = document.querySelector('li');

firstLi.parentElement // parent of the li will point to ul.
firstLi.parentElement.parentElement // pint to body
firstLi.parentElement.parentElement.parentElement // point to body,

const ul = document.querySelector('ul');
ul.children // ponts to all li of ul.
ul.children[0].innerText // give inner text of first child.
ul.children[0].nextElementSibling // next li from ul
const thirdLi = ul.children[0].nextElementSibling.nextElementSibling // 3rd li.
thirdLi.previousElementSibling // points to 2nd li.


