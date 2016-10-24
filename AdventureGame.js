confirm("ARE YOU READY FOR ADVENTURE?!")
var age = prompt("HOW OLD ARE YOU, YOUNG ADVENTURER??")
  if(age >= 13){
    confirm("VERY WELL, LET US VENTURE FORTH!")
  }
  else {confirm("By pressing 'OK' you affirm that you will hold neither the developer of this game, nor the maufacurer/retailer of the aparati with which this game is played responsible for any inappropriate content for those under 13 years of age")}
var userAnswer1 = prompt("As you walk through the Forest of Calciwood you come along an ancient castle. Do you enter?")
  if(userAnswer1 === "Yes"){
    confirm("You open the castle doors, a pile of gold going to the ceiling lays before you, ready for the taking. You excitedly fill your pockets and every pouch you have. Your adventuring has made you very rich and you retire to a life of mideval leisure.")
  }
else{confirm("As you walk away from the casle, the ground gives way into a trap from some war, frogotten eons ago. You are impaled by spears planted at the bottom by a soldier long since dead.")}

var feedback = prompt("On a scale of 1 to 10, 10 being a lot, how did you enjoy the game?")
if(feedback >= 8){
confirm("Thank you so much for your support~!")
}
else{"I'll keep practicing coding and adventuring!"}
