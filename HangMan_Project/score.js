let score = 10;

function score_reset() {
    score = 0;
}
function score_increase() {
    score++;
}
function score_decrease() {
    score--;
}
function score_get() {
    var dbRef = firebase.database().ref().child("score");
	dbRef.on (
		"value",
		function(snap){
            console.log(snap.val());
            return snap.val();
        });
}
function score_set(name) {
    let dbref = firebase.database().ref("score/" + name).update({
        'score': score
    });

    dbref.then(function() {
        // Refresh scoreboard
    });
}
