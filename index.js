
function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('div .target');
}

function increaseRankBy(n){
  var list = document.getElementById('app').querySelectorAll('ul.ranked-list li');

  for (var i = 0; i < list.length; i++) {
    list[i].innerHTML = parseInt(list[i].innerHTML) + parseInt(n);
  }
}

function deepestChild(){
  var child = document.getElementById('grand-node').querySelectorAll('div');
  
  for (var i = 0; i < child.length; i++){
    if (i === child.length){
      return child[i].innerHTML;
    }
  }
}





