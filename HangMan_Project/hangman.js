var letters = 'abcdefghijklmnopqrstuvwxyz'
function createButtons(word){
    for (let i=0; i < 26; i++) {
        var letter = String.fromCharCode(i+65);
        btns[i] = document.createElement("BUTTON");
        btns[i].innerHTML = letter;
        btns[i].style.fontSize = '1em'
        btns[i].onclick = function() {buttonclicked(btns[i], word, letters[i])};
        document.getElementById('buttons').appendChild(btns[i]);
    }
}

function buttonclicked(button, word, letter){
    button.disabled = true;
    // checks if letter guessed inside letter
    if(word.includes(letter)){
        let letters = document.getElementsByClassName(letter);
        // checks amount of correct guesses
        for(let i=0;i<letters.length;i++){
            letters[i].style.visibility = 'visible';
            score++;
            correctGuesses++;
        }
    }
    // incorrect guess
    else{
        score--;
        lives--;
        if(lives == 0){
            gameLost(); 
        }
    }
    // if all letters guessed game won
    if(correctGuesses == word.length){
        gameWon();
        //Amir();
    }
    displayScore()
    displayLives()
}
// Lets the player know they have lost when their lives run out
function gameLost(){
    setTimeout(alert('You Lose'), 2000);
    restart()
}
// Lets the player know they have won and with what score
function gameWon(){
    let name = prompt('You win, Enter your name');
    alert(name+', your score is '+score);
    // send score to database leaderboard JOSH
    scoreSetDatabase(name, score);
    
    // restart the game
    restart()
}
// Create object class of word with its definition and name as attributes
function word(name, definition){
    this.name = name;
    this.definition = definition;
}
// Randomly chooses a word from the array of words
function chooseWord(list_of_words){ 
    return list_of_words[Math.floor(Math.random()*list_of_words.length)];
}
// Displays the word to guess in a hidden format
function displayLetters(WordChosen){
    var letters = [];
    var underlines = [];
    for (let i=0;i<WordChosen.length;i++){
        letters[i] = document.createElement('h1');
        letters[i].innerHTML = WordChosen[i];
        letters[i].setAttribute("class", WordChosen[i]);
        letters[i].style.display = 'inline-block';
        letters[i].style.visibility = 'hidden';
        letters[i].style.margin = '20px';
        letters[i].style.fontSize = '1em'
        document.getElementById('wordChosen').appendChild(letters[i]);
        underlines[i] = document.createElement('p');
        underlines[i].style.margin = '2px';
        underlines[i].innerHTML = '_';
        underlines[i].style.visibility = 'visible';
        underlines[i].style.fontSize = '1em'
        letters[i].appendChild(underlines[i]);
    }
}
// Removes elements from body (Helper function of the restart() function)
function removeElement(elementId) {
    var myNode = document.getElementById(elementId);
    myNode.innerHTML = '';
}
// Restarts the game
function restart(){
    lives = 7;
    score = 0;
    correctGuesses = 0;
    var WordChosen = chooseWord(list_of_words);
    removeElement('wordChosen');
    removeElement('buttons');
    WordChosen = chooseWord(list_of_words); 
    displayLetters(WordChosen['name']);
    createButtons(WordChosen['name']);
    displayScore();
    displayLives();
    displayDefinition(WordChosen['definition']);

}

// Creates the current score for the player
function displayScore(){
    document.getElementById('score').innerHTML = 'Score: '+ score;
}

// Creates the number of lives on the body of the page
function displayLives(){
    document.getElementById('lives').innerHTML = 'Lives: '+ lives;
}


// Create restart button
function createRestartButton() {
    let restartButton = document.createElement("BUTTON");
    restartButton.innerHTML = 'Restart';
    restartButton.setAttribute('id', 'restartButton');
    document.body.appendChild(restartButton);
    document.getElementById('restartButton').addEventListener('click', function(){restart();})
}

function displayDefinition(definition){
    document.getElementById('definition').innerHTML = definition
}

//Create Amir when he win game
function Amir(){
    let text= document.createElement("img");
    text.setAttribute("src","images/text.gif");
    text.setAttribute("width", "225");
    text.setAttribute("height", "282");
    document.getElementById("Amir").appendChild(text);
    let new_line=document.createElement("br");
    document.getElementById("Amir").appendChild(new_line)

    let Amir= document.createElement("img");
    Amir.setAttribute("src","images/Amir.jpg");
    Amir.setAttribute("width", "225");
    Amir.setAttribute("height", "282");
    document.getElementById("Amir").appendChild(Amir);
    let new_line_1=document.createElement("br");
    document.getElementById("Amir").appendChild(new_line_1)

    let dancer= document.createElement("img");
    dancer.setAttribute("src","images/dancer.gif");
    dancer.setAttribute("width", "225");
    dancer.setAttribute("height", "282");
    document.getElementById("Amir").appendChild(dancer);

}        

 // Dictionary List
 let list_of_words = [new word('coordinator', 'A person whose job is to organize events or activities.'), new word('alligator', 'A large semi-aquatic reptile.'), new word('committee', 'A group of people appointed for a specific function.'),
 new word('hippo', 'A large african mammal that lives in the water but can travel on land.'), new word('overlord', 'A person of great power or authority'), new word('overwatch', 'To watch through or throughout'),
 new word('apple', 'A red fruit'), new word('macintosh', 'A computer model'), new word('origami', 'Paper folding art'),
 new word('capitalism', 'A economic and political system')];

 // global variables
var lives = 7;
var score = 0;
var correctGuesses = 0;
var btns = [];
var WordChosen = chooseWord(list_of_words);

// Execute functions+
displayLetters(WordChosen['name']);
createButtons(WordChosen['name']);
displayScore();
displayLives();
displayDefinition(WordChosen['definition']);
createRestartButton();
updateScoreboard();