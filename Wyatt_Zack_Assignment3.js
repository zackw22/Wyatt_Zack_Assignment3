//alert("JavaScript works!");

//Property= Is a key inside of an Object

//Method= A function inside of an object

// Global Variables
var team1= "The Flame";
var team2= "The Lightening";
var series= "7";
var event= "ABC Finals";
var say = function(message) { console.log(message); };
var guarded = true;
var blocked= false;


//Object
//Argument number
var game = {
    teams: [team1, team2], //Property: Array
    Lightening:"99",//Property: Num
    whosUp: function(x) {
        console.log(team2 +" is up by " + x);//Property: Function
    },
    secondsLeft: "10", //
    
    
    
};

//Method: Procedure
console.log("Welcome to game " + series + " of the " + event +"!");
console.log(team1 + " vs " + team2);
console.log("With " + game.secondsLeft + " seconds left.");
game.whosUp(1); //Method


//For Loop
//Argument Array

console.log("Starting for " + team1);
var listOfPlayers = function (json) {
	for (var i = 0; i < json.players.length; i++) {
		var player = json.players[i];
		say("Name: " + player.name + ", Position: " + player.position + ", Height: " + player.height);
	
        };
};json.players.push("Michael");// Method: Mutator

listOfPlayers(json);

//For loop
//Argument Array
//

console.log("Starting for " + team2);
var listOfOpponents = function (json2) {
	for (var i = 0; i < json2.opponents.length; i++) {
		var player = json2.opponents[i];
		say("Name: " + player.name + ", Position: " + player.position + ", Height: " + player.height);

        };
};
listOfOpponents(json2);

//Boolean
//Nesting Conditional

    if (guarded === false) {
        console.log ("Jebron takes the shot!");
    }
        
       else if (guarded === true){
            console.log ("Jebron passes it to Michael");
       if (guarded=== true){
            console.log ("Michael will take the shot!");
       }
       };
//While Loop
i = game.secondsLeft
while (i>=1)
  {
  console.log (i)
  i--;
  };
  
//Return String
//Argument String

function shoots() {
    console.log("He shoots!");
    
};  
shoots()

if (blocked===false){
    console.log("He score!, The crowd goes wild!")
    console.log(team1 + " wins the " + event + " !");
}
    else{
        console.log("He misses!, the crowd is booing him off the court");
        console.log(team2 + " wins the " + event + " !");
    };




