var language = (function() {


  return {
    setLanguage: function(userChoice) {
      if (userChoice === "Spanish")
        console.log("Spanish");
      if (userChoice === "German") {
        console.log("German");
      } else {
        console.log("Pig Latin");
      }
    }


  };
}());
