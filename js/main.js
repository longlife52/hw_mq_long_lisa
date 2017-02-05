// strings
var string1 = 'I am a string';
var string2 = 'I am a string';

//numbers
var num1 = 0;
var num2 = 11;
var num3 = 45;
var num4 = 3.14;
var num5 = -31;

// caution this is a string
var num6 = '1000';

// boolean
var boolean6 = true;
var boolean7 = false;

//null
var nullVar = null;

//undefined
var undefintedvar = undefined;
var unde;

/**** complex types or object types ****/
// objects
// objects have keys and values. 
// values can be any of the property types

var myObject = {
    key: 'value'
};

//objects
var family = {
	dad: 'Rick',
	mom: 'Barbara',
	age: 42, 
	isJavaScriptAwesome: true,
	brother: 'Jonathan',
	nephew: 'Jack'
};

var AdvWeb2 = {
	instructor: {
		fullName: 'Richard Kalehoff'

	},

	name: "Advanced Web 2",

	numberOfStudents: 4,

	students: [
		{name: "Allison", ufID: 112233, grades: [2, 1, 3]},
		{name: "Jack", ufID: 445566, grades: [5, 4, 6]},
		{name: "James", ufID: 778899, grades: [8, 7, 9]},
		{name: "Barbara", ufID: 000000, grades: [1, 1, 94]},
	],

	toString: function () {
		return AdvWeb2.numberOfStudents;
	}
};

// arrays lists of things in an order
// ID an array by it's place in the order, starts with 0
// arrays can hold any of the javascript types
var myArray = [1, 2, 3];

//functions
var myFunction = function () {
    console.log('I am a function!');
};

var shoppingList = ['milk', 'ice cream', 'flour'];


// identifiers are case sensitive
//AdvWeb2 is and identifier
//must start with letter upper or lower
//or underscore
// or $
// see notes for additional identifiers other than below

//var ABC = 'hello';
//var abcABC = 'there';
//var _howdy = 123;
//var $testing = [1, 2, 3];
//var n7um7 = 7;

//functions
//note: myTestFunction is an identifier
// functions group a bunch of code together
// so you can run it all at once; it is callable

function nameOfTheFunction() {
	console.log ( 'hello from the function');

}

function ordersFood() {
	console.log ( 'waiter says - make me a drink');
	console.log ( "helper says - here's the drink");
	return "Here's your coke.";

}

function greet () {
	return 'well hello there!';
}

console.log( greet ());

//alert( greet ());

//another way to see how these 2 codes work together
// function declaration example below

function combiner(person, message) {
	return person + ' says ' + message;
}

var message = combiner( 'Richard', 'Hello there class');
console.log( message );


// another way to see combining code to run
// another function declaration example below

function plus(thing1, thing2) {
	return thing1 + thing2;
}

console.log(plus( 3, 4) );

// function expression below

var combiner = function abcde(person, message) {
	return person + ' says ' + message;
}

var message = combiner( 'Richard', 'Hello');
console.log( message );

//more sample code
 var AdvWeb2 = {
 	instructor: {
 		fullName: 'Richard Kalehoff'
 	},

 	name: "Advanced Web 2",
 	numberOfStudents: 4, 
 	describeClass: function howdy(){
 		console.log( " There are " + AdvWeb2.numberOfStudents + " students in " + AdvWeb2.name + ".");
 	},
 	students: [
		{name: "Allison", ufID: 112233, grades: [2, 1, 3]},
		{name: "Jack", ufID: 445566, grades: [5, 4, 6]},
		{name: "James", ufID: 778899, grades: [8, 7, 9]},
		{name: "Barbara", ufID: 000000, grades: [1, 1, 94]},
	]
 };

function printName() {
	console.log("mmc");
}


















