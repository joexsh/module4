// // STEP 2: Wrap the entire contents of SpeakHello.js inside of an IIFE

// // STEP 3: Create an object, called 'helloSpeaker' to which you will attach
// // the "speak" method and which you will expose to the global context
// // var helloSpeaker =

// // DO NOT attach the speakWord variable to the 'helloSpeaker' object.
// var speakWord = "Hello";

// // STEP 4: Rewrite the 'speak' function such that it is attached to the
// // helloSpeaker object instead of being a standalone function.

// function speak(name) {
//   console.log(speakWord + " " + name);
// }
// // STEP 5: Expose the 'helloSpeaker' object to the global scope. Name it
// // 'helloSpeaker' on the global scope as well.



// STEP 2: 
(function (window) {
  // STEP 3: 
  var helloSpeaker = {};

  
  var speakWord = "Hello";

  // STEP 4: 
  helloSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  };

  // STEP 5: 
  window.helloSpeaker = helloSpeaker;
})(window);

