//console.log(ripple);
//var api = new ripple.RippleAPI({server:'wss://s.altnet.rippletest.net:51233'});
var api = new ripple.RippleAPI({server:'wss://s.altnet.rippletest.net:51233'});

api.on('error', function(errorCode, errorMessage){
  console.log(errorCode + ': ' + errorMessage);
});

api.on('connected', function(){
  //console.log('connected');
});

api.on('disconnected', function(code){
  console.log('disconnected, code:', code);
});