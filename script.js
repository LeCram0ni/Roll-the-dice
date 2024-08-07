function updateDice() {
  let diceNumber = document.getElementById("dice").value;
  renderDice(diceNumber);
}

function renderDice(diceNumber) {
  clear();
  for (let i = 0; i < diceNumber; i++) {
    let diceInstance = new Dice(randomEye());
    console.log(diceInstance);
    document.getElementById("output").innerHTML += `<div id="dice-instance">${diceInstance.eye}</div>`;
  }
}

function Dice(eye) {
  this.eye = eye;
}

function randomEye() {
  return Math.floor(Math.random() * 6) + 1;
}

function clear(){
    document.getElementById("output").innerHTML = ``;
}

module.exports = randomEye;