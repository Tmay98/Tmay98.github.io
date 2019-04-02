var btns = []
createButtons()

function createButtons(){
    for (let i=0; i < 26; i++) {
        var letter = String.fromCharCode(i+65);
        btns[i] = document.createElement("BUTTON");
        btns[i].innerHTML = letter;
        btns[i].onclick = function() {buttonclicked(btns[i])};
        document.body.appendChild(btns[i]);
    }
}

function buttonclicked(button){
    button.disabled = true;
}

function chooseWord(list_of_words){ 
    random_index = Math.floor(Math.random()*list_of_words.length)
    return list_of_words[random_index]
}

    // Dictionary List
    let list_of_words = ['coordinator', 'charizard'];
    
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
    createButtons();