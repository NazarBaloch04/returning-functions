//  function that returns a string that has letters in alphabetical order.
// Example string : 'Pakistan'
// Expected Output : 'aaiknPst'
// Assume punctuation and numbers symbols are not included in the passed string.


// Define a function named alphabet_order that takes a string parameter (str)
function alphabet_order(str) {
//Split the string into an array of characters, sort the array, and join the characters back into a string
  return str.split('').sort().join('');
}
// Log the result of calling alphabet_order with the input string "webmaster" to the console
console.log(alphabet_order("pakistan"));

// The split() method is used to split a String object into an array of strings by separating the string into substrings.
// Code : console.log('pakistan'.split(""));
// Output : ["p", "a", "k", "i", "s" , "t" , "a", "n"]

// The sort() method is used to sort the elements of an array in place and returns the array.
// Code : console.log(["p", "a", "k", "i", "s" , "t" , "a", "n"].sort());
// Output : ["a", "a", "i", "k", "n" , "p" , "s", "t"]

// The join() method is used to join all elements of an array into a string.
// Code : console.log(["a", "a", "i", "k", "n" , "p" , "s", "t"].join(""));
// Output : "aaiknpst"


function country(str: string = "pakistan") {
  return str;
}
console.log(country());


function Country(str: string = "pakistan", str1: string = "England") {
  
  return `${str} ${str1}`
}
console.log(Country());


function Admission(name: string, Qualification: string, email: string): any{
console.log(`my name is ${name} i am ${Qualification} my email is ${email}`);
}
Admission("Nazar Baloch", "under  Graguated" , "mazarinazarali04@gmail.com")



function weatherCondition(temperature: string = "23 Celcius"
){
  return `Today the temperature will rise till ${temperature}`
}
console.log(weatherCondition());

