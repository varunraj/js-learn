const btn = document.querySelector('button');

btn.addEventListener('click', function() {
	alert('CLICKED!!!');
});

// add a second click event to same btn

btn.addEventListener('click', function() {
	console.log('SECOND THING!!');
});

btn.addEventListener('mouseover', function() {
	btn.innerText = 'STOP TOUCHING ME';
});

btn.addEventListener('mouseout', function() {
	btn.innerText = 'Click Me!';
});

window.addEventListener('scroll', function() {
	console.log('STOP SCROLLING!!');
});
