var peristream = require('peristream/browser');

var stream = peristream('https://www.periscope.tv/w/1djGXBXkZEVxZ')

stream.connect().then(function(emitter){
  emitter.on(peristream.HEARTS, function(message){
    var log = document.createElement('p');
    log.innerText = 'YAY HEART from ' + message.displayName;
    document.getElementById('logs').appendChild(log);
  });
});
