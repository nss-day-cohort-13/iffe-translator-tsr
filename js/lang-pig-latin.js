var pigLatin =(function(language) {
  var translations = {"merry":"errymay", "christmas":"istmaschray", "happy":"appyhay", "new year":"ewnay earyay", "kwanzaa":"wanzaakay", "hanukkah":"anukkahhay", "holiday":"olidayhay", "holidays":"olidayshay", "seasons":"easonssay", "season":"easonsay", "greetings":"reetingsgay", "greeting":"reetinggay", "have":"avehay", "wish":"ishway", "you":"ouyay", "yourself":"ourselfyay", "i":"iay", "we":"eway", "family":"amilyfay", "very":"eryvay", "love":"ovelay", "a":"aay", "and":"nday", "to":"otay"};
  var translatedPhrase = [];

  language.getPigLatin = function(text) {
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
    console.log("final pig latin", stringPhrase);
    return stringPhrase;
  }
  return language;
}(language));
