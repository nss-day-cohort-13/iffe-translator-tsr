var german =(function(language) {
  var translations = {
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

  language.getGerman = function(text) {
    console.log("this is text", text);
    var adjustedText = text.map(function(value) {
      console.log(value.toLowerCase())
      return value.toLowerCase();
    });
    // var translatedPhrase = Object.keys(translations).filter(function(compare) {
    //   return adjustedText.indexOf(compare) !== -1;
    // })

    // add 'var translatedPhrase = adjustedText' before map on the line below
    var translatedPhrase = adjustedText.map(function(value, index) {
      return translations[value];
    });
    var stringPhrase = translatedPhrase.join(" ");
    console.log("final german", stringPhrase);
    return stringPhrase;
  }
  return language;
}(language));
