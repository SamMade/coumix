document.addEventListener("DOMContentLoaded", function(){
  if (document.attachEvent) document.attachEvent('onkeydown', keyboardHandler);
  else document.addEventListener('keydown', keyboardHandler);
});

function keyboardHandler(e) {
  var key = window.event ? e.keyCode : e.which;

  var previousComic = document.getElementById('previous_comic');
  var nextComic = document.getElementById('next_comic');

  if (key === 37 && previousComic) {
    window.location = previousComic.href;
  }

  if (key === 39 && nextComic) {
    window.location = nextComic.href;
  }
}