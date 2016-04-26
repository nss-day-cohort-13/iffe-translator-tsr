var userText = document.getElementById("user-language");
var userChoice = document.getElementById("language-type");

var textDump = document.getElementById("translated-lang").innerHTML;

document.addEventListener("keyup", function(e) {
  if (e.keyCode === 13) {
    language.setLanguage(userChoice.value);
  }
});

var run = document.getElementById("translate-button");
run.addEventListener("click", function(){
  language.setLanguage(userChoice.value);
});