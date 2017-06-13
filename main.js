var oNum = parseInt(Cookies.get('OnionRings')) || 0
  , hNum = parseInt(Cookies.get('HotDogs')) || 0
  , pNum = parseInt(Cookies.get('Pineapples')) || 0
  ;
document.getElementsByClassName('oringNum')[0].innerHTML = oNum;
document.getElementsByClassName('hdogNum')[0].innerHTML = hNum;
document.getElementsByClassName('pappleNum')[0].innerHTML = pNum;

// document.querySelector('#onionrings').onclick = function onionRingClick(){
//   oNum++;
//   document.getElementsByClassName('oringNum')[0].innerHTML = oNum;
//   Cookies.set( 'OnionRings', oNum );
// };
// document.querySelector('#hotdogs').onclick = function hotDogClick(){
//   hNum++;
//   document.getElementsByClassName('hdogNum')[0].innerHTML = hNum;
//   Cookies.set( 'HotDogs', hNum );
// };
// document.querySelector('#pineapples').onclick = function pineappleClick(){
//   pNum++;
//   document.getElementsByClassName('pappleNum')[0].innerHTML = pNum;
//   Cookies.set( 'Pineapples', pNum );
// };

document.addEventListener("DOMContentLoaded", function(){
  document.querySelector('#onionrings').onclick = function onionRingClick(){
    oNum++;
    document.getElementsByClassName('oringNum')[0].innerHTML = oNum;
    Cookies.set( 'OnionRings', oNum );
  };
  document.querySelector('#hotdogs').onclick = function hotDogClick(){
    hNum++;
    document.getElementsByClassName('hdogNum')[0].innerHTML = hNum;
    Cookies.set( 'HotDogs', hNum );
  };
  document.querySelector('#pineapples').onclick = function pineappleClick(){
    pNum++;
    document.getElementsByClassName('pappleNum')[0].innerHTML = pNum;
    Cookies.set( 'Pineapples', pNum );
  };
  document.getElementById('checkout').onclick = function(){
    Cookies.set( 'OnionRings', 0 );
    Cookies.set( 'HotDogs', 0 );
    Cookies.set( 'Pineapples', 0 );
    window.location.reload();
  };
})
