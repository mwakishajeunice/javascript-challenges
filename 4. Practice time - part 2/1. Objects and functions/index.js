// Create a person object that contains three keys: name, age, and county.
let person = {
    name: "Dennis",
    age: 25,
    county: "Muranga"
}
// Use yourself as an example to set the values for name, age, and country

// Create a function, logData(), that uses the person object to create a
// string in the following format: 
function logData(){
    console.log(person.name + " is " + person.age + " years old and lives in " + person.county);
}
// "Per is 35 years old and lives in Norway"
logData();
// Call the logData() function to verify that it works