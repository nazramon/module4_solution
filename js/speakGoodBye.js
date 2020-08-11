var speakWord = "Good Bye";

function speak(name) {
  console.log(speakWord + " " + name);
}

( function (window) {
  var byeSpeaker = {};
  

  byeSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  }

  window.byeSpeaker = byeSpeaker;
})(window);
