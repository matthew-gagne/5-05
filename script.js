let number = 0

document.getElementById('button').addEventListener('click', addition)

function addition () {
  number = document.getElementById('text').value

  number = parseInt(number)

  number = number * number

  alert(number)
}
