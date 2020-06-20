const keyClass = document.querySelectorAll('.drum');
keyClass.forEach(e => e.addEventListener('click', function() {
  switch (e.innerHTML) {
    case 'w':
        let tom1 = new Audio("./sounds/tom-1.mp3");
        tom1.play();
        break;
    case 'a':
        let tom2 = new Audio("./sounds/tom-2.mp3");
        tom2.play();
        break;
    case 's':
        let tom3 = new Audio("./sounds/tom-4.mp3");
        tom3.play();
        break;
    case 'd':
        let tom4 = new Audio("./sounds/tom-2.mp3");
        tom4.play();
        break;
    case 'j':
        let crash = new Audio("./sounds/crash.mp3");
        crash.play();
        break;
    case 'k':
        let kick = new Audio("./sounds/kick-bass.mp3");
        kick.play();
        break;
    case 'l':
        let snare = new Audio("./sounds/snare.mp3");
        snare.play();
        break;
  }
  buttonAnimation(e.innerHTML);
}));

document.addEventListener('keypress', function(e) {
  switch (e.key) {
    case 'w':
        let tom1 = new Audio("./sounds/tom-1.mp3");
        tom1.play();
        break;
    case 'a':
        let tom2 = new Audio("./sounds/tom-2.mp3");
        tom2.play();
        break;
    case 's':
        let tom3 = new Audio("./sounds/tom-4.mp3");
        tom3.play();
        break;
    case 'd':
        let tom4 = new Audio("./sounds/tom-2.mp3");
        tom4.play();
        break;
    case 'j':
        let crash = new Audio("./sounds/crash.mp3");
        crash.play();
        break;
    case 'k':
        let kick = new Audio("./sounds/kick-bass.mp3");
        kick.play();
        break;
    case 'l':
        let snare = new Audio("./sounds/snare.mp3");
        snare.play();
        break;

    case 'e':
        let e = new Audio("./new-sounds/Sax1.mp3");
        e.play();
        break;
    case 'r':
        let r = new Audio("./new-sounds/Sax2.mp3");
        r.play();
        break;
    case 't':
        let t = new Audio("./new-sounds/trump1.mp3");
        t.play();
        break;     
  }
  buttonAnimation(e.key);
})

function buttonAnimation(currentKey) {
  const currentKeyClass = document.querySelector('.' + currentKey).classList;
  currentKeyClass.add('pressed');
  setTimeout( function() {
    currentKeyClass.remove('pressed');
  } , 100)
}

$('#play').click('play', ()=> {
    let play = new Audio('./tokyo.mp3');
    play.play();
    $('#play').addClass('animate__animated animate__heartBeat animate__infinite')
})

