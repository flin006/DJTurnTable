
   $(document).ready(function() {
      $('.toggleNav').click(function() {
        $('#flex-nav ul').toggleClass('open');
      });
    });

var aAudio = new Audio('DJTurntableAudio1.mp3');
var bAudio = new Audio('DJTurntableAudio2.mp3');

function myAudioFunction(letter) {
  if(letter == 'a') {
      aAudio.play();
  } else if(letter == 'b') {
      bAudio.play();
  }
}