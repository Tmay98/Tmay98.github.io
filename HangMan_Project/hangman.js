var letters = 'abcdefghijklmnopqrstuvwxyz'
function createButtons(word){
    for (let i=0; i < 26; i++) {
        var letter = String.fromCharCode(i+65);
        btns[i] = document.createElement("BUTTON");
        btns[i].innerHTML = letter;
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
    }
    displayScore()
    displayLives()
}

function gameLost(){
    displayHangMan();
    setTimeout(alert('You Lose'), 2000);

    restart()
}

function gameWon(){
    let name = prompt('You win, Enter your name');
    alert(name+', your score is '+score);
    // send score to database leaderboard JOSH
}

function word(name, definition){
    this.name = name;
    this.definition = definition;
}

function chooseWord(list_of_words){ 
    return list_of_words[Math.floor(Math.random()*list_of_words.length)].name;
}

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
        document.getElementById('wordChosen').appendChild(letters[i]);
        underlines[i] = document.createElement('p');
        underlines[i].style.margin = '2px';
        underlines[i].innerHTML = '_';
        underlines[i].style.visibility = 'visible';
        letters[i].appendChild(underlines[i]);
    }
}

function removeElement(elementId) {
    var myNode = document.getElementById(elementId);
    myNode.innerHTML = '';
}

function restart(){

    lives = 7;
    score = 0;
    correctGuesses = 0;
    var WordChosen = chooseWord(list_of_words);
    removeElement('underlines');
    removeElement('wordChosen');
    removeElement('buttons');
    WordChosen = chooseWord(list_of_words);

    displayLetters(WordChosen);
    createButtons(WordChosen);
    displayScore();
    displayLives();
    
}

function displayScore(){
    document.getElementById('score').innerHTML = 'score: '+ score;
}

function displayLives(){
    document.getElementById('lives').innerHTML = 'Lives: '+ lives;
}


    // Dictionary List
    let list_of_words = [new word('coordinator', 'def'), new word('alligator', 'def'), new word('committee', 'def'),
        new word('hippo', 'def'), new word('overlord', 'def'), new word('overwatch', 'def'),
        new word('apple', 'def'), new word('macintosh', 'def'), new word('fuji', 'def'),
        new word('capitalism', 'def')];

    // Create the image of the hang man when lives runs out.
function displayHangMan(){
    let hangMan = document.createElement('img');
    hangMan.src="images/hangman.gif";
    hangMan.style.position = 'absolute';
    hangMan.style.left = '50%';
    hangMan.style.top = '50%';
    hangMan.style.margin = 'auto';
    hangMan.id = 'hangMan';
    document.body.appendChild(hangMan);
}
function hideHangMan(){
    document.getElementById('hangMan').style.visibility = 'hidden';
}

    // create restart button
    restartButton = document.createElement("BUTTON");
    restartButton.innerHTML = 'Restart';
    restartButton.setAttribute('id','restartButton');
    restartButton.onclick = function() {restart()};
    restartButton.onclick = function() {hideHangMan()};
    document.getElementById('restart').appendChild(restartButton);

    // Execute functions
    var lives = 7;
    var score = 0;
    var correctGuesses = 0;
    var btns = [];
    var WordChosen = chooseWord(list_of_words);
    displayLetters(WordChosen);
    createButtons(WordChosen);
    displayScore();
    displayLives();