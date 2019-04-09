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
    let scoreArray = []
    for (var key in scoreData) {
        scoreArray.push([key, scoreData[key]['score']])
    }

    // sorting array by 2nd value which is score
    scoreArray = scoreArray.sort(function(a,b) {
        return a[1] - b[1];
    });
    // reverse so highest score is first
    scoreArray.reverse()
    // let highScore = 0;
    for (var i in scoreArray) {
        scoreboardDiv.innerHTML += scoreArray[i][0] + ": " + scoreArray[i][1] + " PT</br>";
    }
}


function clearScorebard() {
    scoreboardDiv.innerHTML = "<h2>Scoreboard</h2>";
}