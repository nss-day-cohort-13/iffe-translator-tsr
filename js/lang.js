var language = (function() {
var text = [];

  return {
    setLanguage: function(userChoice, userText) {
      if (userChoice === "Spanish") {
        text = userText.split(' ');
        language.getSpanish(text);

      } else if (userChoice === "German") {
        text = userText.split(' ');
        language.getGerman(text);

      } else {
        text = userText.split(' ');
        language.getPigLatin(text);
      }
    },


  };
}());

console.log("show lang", language ); //show but now 2nd page
