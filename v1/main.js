
/**
  * GLOBALS
  *
  * index_data
  * match_data
  *
  */

var indexContainer = document.getElementById('index-animation');
var matchContainer = document.getElementById('match-animation');

var index = bodymovin.loadAnimation({
  wrapper: indexContainer,
  animType: 'svg',
  loop: true,
  animationData: index_data
});

var match = bodymovin.loadAnimation({
  wrapper: matchContainer,
  animType: 'svg',
  loop: true,
  animationData: match_data
});
