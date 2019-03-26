function createButtons(){
letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    for (let i=0; i < 26; i++ ){
        var letter = String.fromCharCode(i+65);
        let btn = document.createElement("BUTTON");
        btn.innerHTML = letter;
        btn.onclick = function(){console.log('button '+letters[i]+' was pressed')};
        document.body.appendChild(btn)
    }
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
createButtons();