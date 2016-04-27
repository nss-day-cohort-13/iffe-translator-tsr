var userText = document.getElementById("user-language");
var userChoice = document.getElementById("language-type");
var textDump = document.getElementById("translated-lang");
// remove .innerHTML above

document.addEventListener("keyup", function(e) {
  if (e.keyCode === 13) {
    textDump.innerHTML = language.setLanguage(userChoice.value, userText.value);
    // language.setValue(userText.value);
  }
});

var run = document.getElementById("translate-button");
run.addEventListener("click", function(){
  textDump.innerHTML = language.setLanguage(userChoice.value, userText.value);
  // language.setValue(userText.value);
});

