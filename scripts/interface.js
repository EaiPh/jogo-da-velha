document.addEventListener('DOMContentLoaded', () => {
   
   const quad= document.querySelectorAll('.quadrante')
    
   quad.forEach( (quad)=>{
      quad.addEventListener('click', eClick)
   })
   
   function eClick(e) {
      if (!winner()) {
         if (!player.player1) {
            addSymbolX(e.target)
         } else {
            addSymbolO(e.target)
         }
      }
   }
   
})

function playAgain() {
   positions= [ '', '', '', '', '', '', '', '', '']
   const quad= document.querySelectorAll('.quadrante')
   quad.forEach( (quad)=>{
      quad.innerHTML= ""
   })
   document.getElementById('gameOver').style.display= "none"
}