var treasure = Math.floor(Math.random() * 9)
var bomb = Math.floor(Math.random() * 9)
const emoji = (number) => {
    if(number === treasure){
      document.getElementById(number).innerHTML = "🏆" 
      alert("You Win!")
    } else if(number === bomb){
      document.getElementById(number).innerHTML = "💣"
      alert ("You Lose!")
    } else {
        document.getElementById(number).innerHTML = "🌴"
      }
      
  }