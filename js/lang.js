var language = (function() {
var text = [];

  return {
    setLanguage: function(userChoice, userText) {
      var transPhrase = "";
      if (userChoice === "Spanish") {
        text = userText.split(' ');
        transPhrase = language.getSpanish(text);

      } else if (userChoice === "German") {
        text = userText.split(' ');
        transPhrase = language.getGerman(text);

      } else {
        text = userText.split(' ');
        transPhrase = language.getPigLatin(text);
      }
      return transPhrase;
    },


  };
}());

console.log("show lang", language ); //show but now 2nd page
