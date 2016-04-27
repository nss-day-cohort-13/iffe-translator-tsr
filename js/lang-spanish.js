var language = (function(language) {
  var spanish = {"merry":"Algre", "christmas":"Navidad", "happy":"Contento", "new":"Nuevo", "Year":"anos", "and":"y", "a":"un", "kwanzaa":"Kwanzaa", "hanukkah":"Januca", "holiday":"fiesta", "holidays":"fiesta","seasons":"Estaciones", "greetings":"saludos", "have":"tene", "wish":"deseo", "yourself":"tu mismo", "i":"yo", "we":"nosotros", "you":"tu", "family":"familia", "very":"muy", "love":"amor", "your":"su", "to":"a"};
  // var englishPhrase = ["Merry", "test", "Christmas", "and", "a", "happy", "new", "year", "plane"];
  var translatedPhrase = [];

  language.getSpanish = function(text) { //shows spanish in lang on main, shows array on conlog

    var adjustedText = text.map(function(value) {
      return value.toLowerCase();
    });
      // console.log("lets see", updated );

    //compare spanishkeys array with updated
    var translatedPhrase = adjustedText.map(function(value, index) {
      return spanish[value];
    // console.log("common words", translatedPhrase);
    });
    var stringPhrase = translatedPhrase.join(" ");
    console.log("final spanish phrase", stringPhrase);
    return stringPhrase
  }
  return language;
})(language);



// console.log("show spanish.. ", language.getspanish() );




// orgSolarSystem.getclosest = function() {
//   return closest;
// },

// orgSolarSystem.setgalaxyAge = function(enterAge) {
//   galaxyAge.push(enterAge);
// },

// orgSolarSystem.getgalaxyAge = function() {
//   return galaxyAge;
// }, happy

  // spanishLanguage.gettext = function() {
  //  return mytext;


    //put spanish keys into an array
    // var spanishKeys = Object.keys(spanish);
    // console.log("spanish keys into an array ", spanishKeys );
