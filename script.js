const button = document.querySelector("button")

function drawNumber() {
  
  let min = Math.ceil(document.querySelector("#firstNumber").value)
  let max = Math.floor(document.querySelector("#secoundNumber").value)
  let paragraph = document.querySelector("p")
  let prizeDraw = Math.floor(Math.random() * (max - min) + min);

  if(min >= max) {
    paragraph.innerHTML = `O primeiro número não pode ser maior/igual
    ao segundo numero`
  } else {
    paragraph.innerHTML =`O número sorteado foi ${prizeDraw}`
  }
  
}

button.addEventListener("click", drawNumber)