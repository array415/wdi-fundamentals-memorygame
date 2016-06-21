console.log("JS file is connected to HTML! Woo!");
var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];



var gameBoard = document.getElementById('game-board');

function createBoard() {

	
    for(var x = 0; x < cards.length; x++){
	  var gameBoard = document.getElementById('game-board');
	

	  var newCard = document.createElement('div');
	  newCard.className = 'card';
	  newCard.setAttribute('data-card', cards[x]);
	  newCard.addEventListener('click', isTwoCards);
      gameBoard.appendChild(newCard);
  }

return(newCard);
 }

var isTwoCards = function(){
	
	cardsInPlay.push(this.getAttribute('data-card'));

  if (this.getAttribute('data-card') === 'king') {

    this.innerHTML = "<img src='http://i.imgur.com/tejimDE.png'>"; 
  } 

  else {
    
    this.innerHTML = "<img src='http://i.imgur.com/ycXUX9n.png'>"; 
  
  }

    if(cardsInPlay.length === 2){
    isMatch(cardsInPlay);
    cardsInPlay = [];
    var green = document.getElementsByClassName('card');
    green.innerHTML = '';
  
  }

}

var isMatch = function(){

   if(cardsInPlay[0] === cardsInPlay[1]){
   	alert('You found a match!');

  
  }
   else {
   	alert("No Match!");

   }
   var reset = document.getElementsByClassName('card');
   var resetArray = [reset[0], reset[1], reset[2], reset[3]];
   for(var i = 0; i < resetArray.length; i++){
    resetArray[i].innerHTML = " ";
   }
   
 
}
createBoard();