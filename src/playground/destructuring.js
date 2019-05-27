// Destructuring Object
const person = {
	name:'Benson',
	age: 27,
	location: {
		city: 'California',
		temp: 92
	}
};

const { name = 'Anonymous', age } = person;// set a default to 'Anonymous'
console.log(`${name} is ${age}`);

const { city, temp: temperature } = person.location; //rename "temp" to "temperature"
if(city && temperature){
console.log(`I am at ${city} and the temperture is ${temperature}`);
}
/*
if(person.location.city && person.location.temp){
console.log(`I am at ${ person.location.city } and the temperture is ${person.location.temp}`);
}*/

// Destructuring Array
const address = ['772 S Corrida Dr', 'Covina', 'California', '91724'];

const [stree, city, state, zip] = address;

console.log(`You are in ${city} ${state}`);

//===========================================================================

//Video 90
/*const add = (data) => {
	return data.a + data.b;
}
console.log(add({a:1, b:12}));*/

//Destructung
/*const add = ({a, b}) => {
	return a + b;
}
console.log(add({a:1, b:12}));*/