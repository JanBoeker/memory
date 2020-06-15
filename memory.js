var cardArray = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];
var cardStatus = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var openCards = 0;
var cardStac = [];

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
  if ((0 <= cardNumber) & (cardNumber <= cardArray.length)) {
    if (cardStatus[cardNumber] === 0) {
      document.querySelectorAll("img")[cardNumber].setAttribute("src", "images/pic" + cardArray[cardNumber] + ".png");
      cardStatus[cardNumber] = 1;

    } else {
      document.querySelectorAll("img")[cardNumber].setAttribute("src", "images/rückseite.jpg");
      cardStatus[cardNumber] = 0;
    }
  } else {
    alert("uups!");
  }

}

function resetCard() {
  for (i = 0; i <= cardArray.length-1 ; i++) {
    document.querySelectorAll("img")[i].setAttribute("src", "images/rückseite.jpg");
  }
}
