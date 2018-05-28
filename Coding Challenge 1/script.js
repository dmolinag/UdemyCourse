/*
John and a friend invented a simple game where the player with the highest value of his height (in centimeters) plus five times his age wins (what a silly game :)

1. Create variables for the heights and ages of two friends and assign them some values
2. Calculate their scores
3. Decide who wins and print the winner to the console. Include the score in the string that you output to the console. Don't forget that there can be a draw (both players with the same score).

4. EXTRA: Add a third player and now decide who wins. Hint: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
*/

var johnHigh, friend1High, friend2High, johnAge, friend1Age, friend2Age;

johnHigh = prompt('John high in centimeters');
friend1High = prompt('friend 1 high in centimeters');
friend2High = prompt('friend 2 high in centimeters');
johnAge = prompt('John age');
friend1Age = prompt('friend 1 age');
friend2Age = prompt('friend 2 age');

var johnScore = johnHigh + (5 * johnAge);
var friend1Score = friend1High + (5 * friend1Age);
var friend2Score = friend2High + (5 * friend2Age);

if (johnScore > friend1Score && johnScore > friend2Score){
    console.log("The winner is John with a " + johnScore + " score.");
}
else if (friend1Score > johnScore && friend1Score > friend2Score){
    console.log("The winner is friend 1 with a " + friend1Score + " score.");
}
else if (friend2Score > johnScore && friend2Score > friend1Score){
    console.log("The winner is friend 2 with a " + friend2Score + " score.");
}
else{
    console.log("it's a draw");
}
