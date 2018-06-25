var xhr = new XMLHttpRequest();
xhr.open("GET", "http://quotes.rest/qod.json", false);
xhr.send();

console.log(xhr.status);
console.log(xhr.statusText);
console.log(xhr);

var data = "xhr";
var json = JSON.parse(data);
console.log(json);
