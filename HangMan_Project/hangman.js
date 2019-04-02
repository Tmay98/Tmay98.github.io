function createButtons(word){
    for (let i=0; i < 26; i++) {
        var letter = String.fromCharCode(i+65);
        btns[i] = document.createElement("BUTTON");
        btns[i].innerHTML = letter;
        btns[i].onclick = function() {buttonclicked(btns[i], word)};
        document.body.appendChild(btns[i]);
    }
}

function buttonclicked(button){
    button.disabled = true;
}

function word(name, definition){
    this.name = name;
    this.definition = definition;
}

function chooseWord(list_of_words){ 
    return list_of_words[Math.floor(Math.random()*list_of_words.length)].name
}

function displayLetters(){
    
}


    // Dictionary List
    let list_of_words = [new word('coordinator', 'def'), new word('charizard', 'def')];
    // Create the image of the hang man
    let hangMan = document.createElement('img');
    hangMan.src="images/hangman.gif";
    hangMan.style.position = 'absolute';
    hangMan.style.left = '50%';
    hangMan.style.top = '50%';
    hangMan.style.margin = 'auto';
    document.body.appendChild(hangMan);


    // Execute functions
    var btns = []
    var WordChosen = chooseWord(list_of_words)
    console.log(WordChosen)
    createButtons();