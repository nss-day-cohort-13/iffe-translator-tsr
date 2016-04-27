var language = (function(spanishLanguage) {
  var spanish = {"merry":"algre", "christmas":"Navidad", "happy":"contento", "new":"Nuevo", "Year":"anos", "and":"y", "a":"un", "kwanzaa":"Kwanzaa", "Hanukkah":"januca", "holiday":"fiesta", "seasons":"Estaciones", "greetings":"saludos", "have":"tene", "wish":"deseo", "yourself":"tu mismo", "i":"yo", "we":"nosotros", "you":"tu", "family":"familia", "very":"muy", "love":"amor", "your":"su", "to":"a"};
  // var englishPhrase = ["Merry", "test", "Christmas", "and", "a", "happy", "new", "year", "plane"];
  var translatedPhrase = [];

  spanishLanguage.getSpanish = function(englishPhrase) { //shows spanish in lang on main, shows array on conlog

//run here
    // console.log("show user input.. ", englishPhrase );
    //converts userinput to lowercase

    var updated = englishPhrase.map(function(lowerCase) {
      return lowerCase.toLowerCase();
    });
      // console.log("lets see", updated );

    //compare spanishkeys array with updated
    var translatedPhrase = Object.keys(spanish).filter(function(compare) {
      return updated.indexOf(compare) !== -1;
    }).map(function(value, index) {
      return spanish[value];
    // console.log("common words", translatedPhrase);
    });
    var stringPhrase = translatedPhrase.join(" ");
    console.log("final spanish phrase", stringPhrase);
  }
  return spanishLanguage;
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
