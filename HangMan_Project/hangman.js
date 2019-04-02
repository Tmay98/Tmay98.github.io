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