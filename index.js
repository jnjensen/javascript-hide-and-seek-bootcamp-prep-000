
function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('div .target');
}

function increaseRankBy(n){
  const lis = document
  .getElementById('app')
  .querySelectorAll('ul.ranked-list');
  
  console.log(lis)
 
  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = (i+ n).toString();
    
  }
}