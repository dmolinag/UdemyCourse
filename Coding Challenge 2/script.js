///////////////////////////////////////
// CODING CHALLENGE 2

/*
1. Create an array with some years where persons were born
2. Create an empty array (age [] )
3. Use a loop to fill the array with the ages of the persons
4. Use another loop to log into the console whether each person is of full age (18 or older), as well as their age

5. Finally, create a function called printFullAge which receives the array of years as an argument, executes the steps 2., 3. and 4. and returns an array of true/false boolean values: true if the person is of full age (>= 18 years) and false if not (< 18 years)
6. Call the function with two different arrays and store the results in two variables: full_1 and full_2

Example input:  [1965, 2008, 1992]
Example output: [true, false, true]

Hint: you can use a loop not only to read from an array, like y[i], but also to set values in an array, like y[i] = ... You can also use the specific array methods.
*/

var years = [1992, 1965, 1984, 2000, 2010];

function printFullAge(years) {
var age = [];
var fullAges = [];

for (var i = 0; i < years.length; i++) {
    age.push(2018 - years[i]);
}

for(var i = 0; i < age.length; i++){
	if(age[i] >= 18){
            console.log('Person ' + (i + 1) + ' is ' + age[i] + ' years old, and is of full age.');
            fullAges.push(true);
        } 
        else {
            console.log('Person ' + (i + 1) + ' is ' + age[i] + ' years old, and is NOT of full age.');
            fullAges.push(false);
        }
    }
    return printFullAge;
}

var full_1 = FullAge(years);


console.log(full_1);
