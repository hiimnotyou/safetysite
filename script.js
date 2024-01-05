// script.js
var inputSequence = '';
var sequences = [
  { keys: '1p', url: 'https://usemetallic.com' },
  { keys: '2p', url: 'https://metalli.zc.al' },
  { keys: '3p', url: 'https://proxy.ocelot.lol/' },
  { keys: '4p', url: 'https://metallic.eu.org' },
  { keys: '5p', url: 'https://radmanplays.github.io/' },
  { keys: '6p', url: 'https://proxy.outred.dev/' },
  { keys: '7p', url: '/skribblbrowser.html' },
  { keys: '8p', url: 'https://geoquiz.gq/' },
  { keys: '9p', url: 'https://www.rossipotti.de/ausgabe28/tetris/index.html' },
  { keys: '1o', url: 'https://nimbuss.cloud/' },
  { keys: '2o', url: 'https://dcqrmp.sse.codesandbox.io/' },
  { keys: '3o', url: 'https://developmentbuild.herokuapp.com/service/hvtrs8%2F-jq11keaoeq.aoo%2Feaoeq%2Ffaltg%2Fknfez.jtol' },
  { keys: '4o', url: '/browser.html' },
  { keys: '5o', url: 'https://developmentbuild.herokuapp.com' },
  { keys: '6o', url: 'https://developmentbuild.herokuapp.com/service/hvtr%3A-%2Fqlktjep.ko-' },
  { keys: '7o', url: 'https://developmentbuild.herokuapp.com/service/hvtrs8%2F-nmw%2Cge%2Frlcy-rmbnoz-aoppmrctkol%2F7369-rmbnoz' },
  { keys: '8o', url: 'https://94tcyy-8080.csb.app/' },
  { keys: '9o', url: 'https://game316009.konggames.com/gamez/0031/6009/live/index.html' },
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
