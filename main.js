// Capturar todas as keys ou teclas do piano
const keys = document.querySelectorAll(".keys")
//Chama um event para apos o load inicar o projeto
window.addEventListener("load", registerEvents)

//Funçao que espera o evento click acontecer
function registerEvents() {
        keys.forEach( function(key){
            key.addEventListener("click", playNote)
            key.addEventListener("transitionend", removePlayingClass)
    })
    window.addEventListener("keydown", playNote)
}



function playNote(event){
    let audioKeyCode = getKeyCode(event);
    const key = document.querySelector(`.key[data-key="${audioKeyCode}"]`)
    const cantFoundAnyKey = !key
    if(cantFoundAnyKey){
        return ;
    }
    addPlayingClass(key)
    playAudio(audioKeyCode)
}


function getKeyCode(event){
    let keyCode;

    const isKeyboard = event.type === "keydown"
    if(isKeyboard){
        keyCode = event.keyCode
    } else {
        keyCode = event.target.dataset.key
    }
    return keyCode
}

function playAudio (audioKeyCode){
    const audio = document.querySelector(`audio[data-key="${audioKeyCode}"]`)
    audio.ariaCurrentTime = 0
    audio.play()
}

function addPlayingClass(key){
    key.classList.add('playing')
}

function removePlayingClass(event){
    event.target.classList.remove("playing")
}


