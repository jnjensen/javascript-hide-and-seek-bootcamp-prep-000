
function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('div .target');
}

function increaseRankBy(n){
  var elements = document.querySelectorAll('ul.ranked-list li');

  for (var i = 0; i < elements.length; i++) {
    elements[i].innerHTML = parseInt(elements[i].innerHTML) + parseInt(n);
    
  }
}