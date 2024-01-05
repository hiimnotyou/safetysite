// script.js
var inputSequence = '';
var sequences = [
  { keys: '1p', url: 'https://usemetallic.com' },
  { keys: '2p', url: 'https://metalli.zc.al' },
  // ... (other sequences)
  { keys: 'qk', url: 'https://i.ibb.co/s6Kt5RH/Screenshot-2024-01-04-190937.png' }
];

document.addEventListener('keypress', function (event) {
  inputSequence += event.key;

  var sequenceMatched = false;

  for (var i = 0; i < sequences.length; i++) {
    var sequence = sequences[i].keys;

    if (inputSequence.length > sequence.length) {
      inputSequence = inputSequence.slice(-sequence.length);
    }

    if (inputSequence === sequence) {
      // Set the flag to indicate a sequence match
      sequenceMatched = true;

      // Clear the input sequence
      inputSequence = '';

      // Create the iframe element
      var iframe = document.createElement('iframe');
      iframe.id = 'specialFrame';
      iframe.style.display = 'block';

      // Set the src attribute of the iframe
      iframe.src = sequences[i].url;

      // Append the iframe to the body
      document.body.appendChild(iframe);

      break;
    }
  }

  // Check if no sequence matched, then clear the body
  if (!sequenceMatched) {
    // Clear the entire body content
    document.body.innerHTML = '';
  }
});
