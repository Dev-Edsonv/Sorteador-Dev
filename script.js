let firstNumber = document.querySelector("#firstNumber").value
let secoudNumber = document.querySelector("#secoundNumber).value
let paragraph = document.querySelector("p")                                        

function draw() {

  if(firstNumber >= secoundNumber) {
    paragraph.innerHTML = " O primeiro número não poder ser maior/igual ao segundo"

}else {
    let drawNumber = Math.floor(Math.random() * (firstNumber - secoundNumber + 1)) + secoundNumber;
    alert('o numero sorteado foi ${drawNumber}')
  }
