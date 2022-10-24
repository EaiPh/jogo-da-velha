let positions= [ '', '', '', '', '', '', '', '', '']
let player= {
   player1: false,
   player2: false,
}
const waysToWin= [
   [0, 1, 2],
   [3, 4, 5],
   [6, 7, 8],
   [0, 3, 6],
   [1, 4, 7],
   [2, 5, 8],
   [2, 4, 6],
   [0, 4, 8]
]

function addSymbolX(element) {
   if (positions[element.id] == '') {
      element.innerHTML= "<img src='images/player0.png'/>"
      positions[element.id]= 'x'
      player.player1= true
   }
   
   winner()
}


function addSymbolO(element) {
   
   if (positions[element.id] == '') {
      element.innerHTML= "<img src='images/player1.png'/>"
      positions[element.id]= 'o'
      player.player1= false
   }
   
   winner()
}

function winner() {
   
   for (let i=0; i < waysToWin.length; i++) {
      let seq= waysToWin[i]
      
      let pos0= seq[0]
      let pos1= seq[1]
      let pos2= seq[2]
      
      if (positions[pos0] === positions[pos1] && positions[pos0] === positions[pos2] && positions[pos0] != '') {
         document.getElementById('gameOver').style.display= "flex"
         return true
      }
   }
   
}