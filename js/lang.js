var language = (function() {
  var text = [];

  return {
    setLanguage: function(userChoice) {
      if (userChoice === "Spanish") {
        console.log("Spanish");
      } else if (userChoice === "German") {
        console.log("German");
      } else {
        console.log("Pig Latin");
      }
    },
    setValue: function(userText) {
      text = userText.split(' ');
      console.log(text);
    }

  };
}());
