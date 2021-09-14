// const request = new XMLHttpRequest();
// request.onreadystatechange = function(){
//     if (this.readyState === 4) {
// console.log(this.responseText);
// let data = JSON.parse(this.responseText);
// console.log(data);
// }
// request.open('GET', "https://jsonplaceholder.typicode.com/todos")

// request.send();

//api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

let result = fetch("https://jsonplaceholder.typicode.com/todos")
