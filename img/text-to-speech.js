// Get references to the necessary HTML elements
var textInput = document.getElementById('text-input');
var speakButton = document.getElementById('speak-btn');

// Add click event listener to the Speak button
speakButton.addEventListener('click', function () {
  var text = textInput.value;

  if (text.trim() !== '') {
    speak(text);
  }
});

// Function to convert text to speech
function speak(text) {
  // Check if the browser supports the SpeechSynthesis API
  if ('speechSynthesis' in window) {
    // Create a new instance of the SpeechSynthesisUtterance object
    var message = new SpeechSynthesisUtterance();

    // Set the text to be converted to speech
    message.text = text;

    // Start the speech synthesis
    window.speechSynthesis.speak(message);
  } else {
    console.error('Speech synthesis is not supported in this browser');
  }
}
