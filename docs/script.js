
(function () {
    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

    for (var i=0; i < names.length; i++) {
      person_name = names[i];
      firstLetter = person_name.toLowerCase().charAt(0);

      if (firstLetter == 'j') {
        byeSpeaker.speak(person_name);
      } else {
        helloSpeaker.speak(person_name);
      }
    }
})()