var cardArray = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];
var cardStatus = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var openCards = 0;
var cardStac = [];
var firstCard = 9;
var points = 0;
var maxOfPoint = cardArray.length / 2;

cardArray = shuffle(cardArray);

function shuffle(arra1) {
  var ctr = arra1.length,
    temp, index;

  // While there are elements in the array
  while (ctr > 0) {
    // Pick a random index
    index = Math.floor(Math.random() * ctr);

    // Decrease ctr by 1
    ctr--;

    // And swap the last element with it
    temp = arra1[ctr];
    arra1[ctr] = arra1[index];
    arra1[index] = temp;
  }
  return arra1;
}

function turnCard(cardNumber) {

  openCards += 1;

  switch (openCards) {

    // Actual card is the first one
    case 1:
      firstCard = cardNumber;

      if ((0 <= cardNumber) & (cardNumber <= cardArray.length)) {
        if (cardStatus[cardNumber] === 0) {
          showFront(cardNumber);
        }

      } else {
        alert("uups!");
      }
      break;

      // actual card is the second one
      case 2:

        if ((0 <= cardNumber) & (cardNumber <= cardArray.length)) {
          if (cardStatus[cardNumber] === 0) {
            showFront(cardNumber);
          }

        } else {
          alert("uups!");
        }

        // turn back, if the two cards are not equal
        if (cardArray[cardNumber] === cardArray[firstCard]) {

          console.log("It's a match!");

          points += 1;

        } else {

          setTimeout(function(){
            showBack(cardNumber);
            showBack(firstCard);
          }, 1000);

        }

        openCards = 0;
        //firstCard = 11;

        break;

    default:
      console.log("uups...")

  }

  if (points === maxOfPoint) {

    setTimeout(function(){
      alert("You won!");
      resetCard();
    }, 1000);

  }

}

function resetCard() {

  for (i = 0; i <= cardArray.length-1 ; i++) {

    document.querySelectorAll("img")[i].setAttribute("src", "images/rückseite.jpg");

    points = 0;

  }

}

function showFront(numberOfCard1){

  document.querySelectorAll("img")[numberOfCard1].setAttribute("src", "images/pic" + cardArray[numberOfCard1] + ".png");
  cardStatus[numberOfCard1] = 1;

}

function showBack(numberOfCard2){

  document.querySelectorAll("img")[numberOfCard2].setAttribute("src", "images/rückseite.jpg");
  cardStatus[numberOfCard2] = 0;

}
