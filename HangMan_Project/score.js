// let score = 10;

// function score_reset() {
//     score = 0;
// }
// function score_increase() {
//     score++;
// }
// function score_decrease() {
//     score--;
// }

let scoreboardDiv = document.getElementById("scoreboard");

function updateScoreboard() {
    var dbRef = firebase.database().ref().child("score");
	dbRef.on (
		"value",
		function(snap){
            console.log(snap.val());
            printScoreboard(snap.val());
        });
}
function scoreSetDatabase(name, score) {
    let dbref = firebase.database().ref("score/" + name).update({
        'score': score
    });

    dbref.then(function() {
        updateScoreboard();
    });
}
function printScoreboard(scoreData) {
    clearScorebard();

    // let highScore = 0;
    for (var key in scoreData) {
        scoreboardDiv.innerHTML += String(key) + ": " + String(scoreData[key]["score"]) + " PT</br>";
    }
}


function clearScorebard() {
    scoreboardDiv.innerHTML = "<h2>Scoreboard</h2>";
}