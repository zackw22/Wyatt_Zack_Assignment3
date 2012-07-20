//alert("JavaScript works!");

// Global Variables
var team1= "The Flame";
var team2= "The Lightening";
var series= "7";
var event= "ABC Finals";
var say = function(message) { console.log(message); };

//Object
var game = {
    teams: [team1, team2],
    Lightening:"99",
    whosUp: function() {
        console.log(team2 +" is up by 1");
    },
    secondsLeft: "10",
    
};

//Procedure
console.log("Welcome to game " + series + "!");
console.log(team1 + " vs " + team2);
game.whosUp();

//For Loop

console.log("Starting for " + team1);
var listOfPlayers = function (json) {
	for (var i = 0; i < json.players.length; i++) {
		var player = json.players[i];
		say("Name: " + player.name + ", Position: " + player.position + ", Height: " + player.height);
	};
};

listOfPlayers(json);

console.log("Starting for " + team2);
var listOfOpponents = function (json2) {
	for (var i = 0; i < json2.opponents.length; i++) {
		var player = json2.opponents[i];
		say("Name: " + player.name + ", Position: " + player.position + ", Height: " + player.height);

        };
};
listOfOpponents(json2);