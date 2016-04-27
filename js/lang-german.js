var language = (function(germanLanguage) {
  var german = {
    "merry": "fröhlich",
    "christmas": "Weihnachten",
    "happy": "glücklich",
    "new": "neu",
    "year": "jahr",
    "kwanzaa": "kwanzaa",
    "hanukah": "hanukkah",
    "holidays": "ferien",
    "holiday": "urlaub",
    "seasons": "jahreszeiten",
    "greetings": "gruß",
    "have": "haben",
    "wish": "wunsch",
    "you": "sie",
    "yourself": "sich",
    "i": "ich",
    "we": "wir",
    "family": "familie",
    "very": "sehr",
    "love": "liebe",
    "a": "ein",
    "and": "und",
  }
  var translatedPhrase = [];

  germanLanguage.getGerman = function(englishPhrase) { //shows spanish in lang on main, shows array on conlog

//run here
    // console.log("show user input.. ", englishPhrase );
    //converts userinput to lowercase

    var updated = englishPhrase.map(function(lowerCase) {
      return lowerCase.toLowerCase();
    });
      // console.log("lets see", updated );

    //compare spanishkeys array with updated
    var translatedPhrase = Object.keys(german).filter(function(compare) {
      return updated.indexOf(compare) !== -1;
    }).map(function(value, index) {
      return german[value];
    // console.log("common words", translatedPhrase);
    });
    var stringPhrase = translatedPhrase.join(" ");
    console.log("final german phrase", stringPhrase);
  }
  return germanLanguage;
})(language);
