let score = 10;

function reset() {
    score = 0;
}
function increase() {
    score++;
}
function decrease() {
    score--;
}
function get() {
    var dbRef = firebase.database().ref().child("score");
	dbRef.on (
		"value",
		function(snap){
            console.log(snap.val());
            return snap.val();
        });
}
function set(name) {
    let dbref = firebase.database().ref("score/" + name).update({
        'score': score
    });

    dbref.then(function() {
        // Refresh scoreboard
    });
}
