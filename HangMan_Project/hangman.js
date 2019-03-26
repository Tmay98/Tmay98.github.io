function createButtons(){
letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    for (let i=0; i < 26; i++ ){
        var letter = String.fromCharCode(i+65)
        let btn = document.createElement("BUTTON")
        btn.innerHTML = letter
        btn.onclick = function(){console.log('button '+letters[i]+' was pressed')}
        document.body.appendChild(btn)
    }
}