const link =
	'https://api.openweathermap.org/data/2.5/weather?q=Arnhem&units=metric&apikey=bcbe4acaf519f859739d43a16c7eae96';
const tempElement = document.getElementById('temp');
const request = new XMLHttpRequest();
request.open('GET', link, true);
request.onload = function() {
	const obj = JSON.parse(this.response);
	if (request.status >= 200 && request.status < 400) {
		const temp = obj.main.temp;
		console.log(temp);
		tempElement.innerHTML = 'De temperatuur in Arnhem is ' + temp + ' &#8451';
	} else {
		console.log('Deze plaats is onbekend');
	}
};
request.send();
