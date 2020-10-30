// const firstReq = new XMLHttpRequest();
// firstReq.addEventListener('load', function() {
// 	console.log('FIRST REQUEST WORKED!!!');
// 	const data = JSON.parse(this.responseText);
// 	const filmURL = data.results[0].films[0];
// 	const filmReq = new XMLHttpRequest();
// 	filmReq.addEventListener('load', function() {
// 		console.log('SECOND REQUEST WORKED!!!');
// 		const filmData = JSON.parse(this.responseText);
// 		console.log(filmData.title);
// 	});
// 	filmReq.addEventListener('error', function(e) {
// 		console.log('ERROR!!', e);
// 	});
// 	filmReq.open('GET', filmURL);
// 	filmReq.send();
// });
// firstReq.addEventListener('error', (e) => {
// 	console.log('ERROR!!!!!!');
// });
// firstReq.open('GET', 'https://swapi.co/api/planets/');
// firstReq.send();
// console.log('Request Sent!');

fetch('https://swapi.co/api/planetsuy21/')
	.then((response) => {
		if (!response.ok) // to prevent the cases where 404 is sent. 404 is not an error for fetch. only network error will go to error catch block.
			throw new Error(`Status Code Error: ${response.status}`); // this will be caught in catch.
		// response object is a readable stream. We can call .json to read to completion and covert to json. This operation is async.
		response.json().then((data) => {
			for (let planet of data.results) {
				console.log(planet.name);
			}
		});
	})
	.catch((err) => {
		console.log('SOMETHING WENT WRONG WITH FETCH!');
		console.log(err);
	});
