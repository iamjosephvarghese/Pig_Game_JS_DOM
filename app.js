

var score, roundScore, activePlayer,gamePlaying;




// document.querySelector('#current-' + activePlayer).textContent = dice;
//
// var x = document.querySelector('#score-1').textContent;
// console.log(x);



init();


document.querySelector('.btn-roll').addEventListener('click',function() {

if(gamePlaying){

  var dice = Math.floor((Math.random() * 6) + 1 );


  var diceDOM = document.querySelector('.dice');
  diceDOM.style.display = 'block';
  diceDOM.src = 'dice-' + dice + '.png';

  if(dice !== 1){
    roundScore += dice;
    document.querySelector('#current-' + activePlayer).textContent = roundScore;
  }else {
    nextPlayer();
  }

}
});

document.querySelector('.btn-hold').addEventListener('click', function() {

  if(gamePlaying){

  score[activePlayer] += roundScore;
  document.querySelector('#score-' + activePlayer).textContent = score[activePlayer];
  if(score[activePlayer] >= 100){
    document.querySelector('#name-' + activePlayer).textContent = 'WINNER';
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
    gamePlaying = false;
  }else {
    nextPlayer();
  }


}

});



document.querySelector('.btn-new').addEventListener('click',init);


// document.querySelector('.btn-new').addEventListener('click', function(){
//
//   init();
//   document.querySelector('#name-0').textContent = 'PLAYER 1';
//   document.querySelector('#name-1').textContent = 'PLAYER 2';
//
//   document.querySelector('.player-' + activePlayer + '-panel').classList.remove('winner');
//
// });

function nextPlayer(){
  roundScore = 0;
  document.querySelector('#current-' + activePlayer).textContent = roundScore;
//  document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
//  document.querySelector('.player-' + activePlayer + '-panel').classList.add('active');

//  can be done like this also using toggle
  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');


  document.querySelector('.dice').style.display = 'none';
}

function init(){

  gamePlaying = true;


  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.add('active');


  score = [0,0];
  roundScore = 0;
  activePlayer = 0;


  document.querySelector('.dice').style.display = 'none';

  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';

  document.querySelector('#name-0').textContent = 'PLAYER 1';
  document.querySelector('#name-1').textContent = 'PLAYER 2';





}
