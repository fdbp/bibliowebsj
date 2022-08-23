const d = [];
fetch("https://coinlore-cryptocurrency.p.rapidapi.com/api/tickers/?start=0&limit=100", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "coinlore-cryptocurrency.p.rapidapi.com",
		"x-rapidapi-key": "2eeddbcba2mshd1d05cb3c9efbadp160c6djsn02689ce0015c"
	}
})
.then(response => response.json())
.then( d => {
	console.log(d);
	console.log(d.data[0].rank);



const form = document.querySelector('#form');
const button = document.querySelector('#button');
const result = document.querySelector('#result');

const tryToFilter = () => {
	result.innerHTML = '';
	console.log(form.value);
	const text = form.value.toLowerCase();
	for(let x of d.data){
		console.log(x);
		let name = x.name.toLowerCase();
		if(name.indexOf(text) !== -1){
			result.innerHTML += `<li class="list-group-item list-group-item-success">${x.name}</li>`
		}
	}
	if(result.innerHTML === ''){
		result.innerHTML += `<li class="list-group-item list-group-item-success">That coin doesn't exist! ...</li>`
	}
}

button.addEventListener('click', tryToFilter)
})
.catch(err => {
	console.error(err);
});