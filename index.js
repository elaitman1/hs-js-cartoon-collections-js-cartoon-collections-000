function dwarfRollCall(dwarves) {
  var newArray = []
  var y =1
  for(var x = 0; x<dwarves.length; x++){
    newArray.push(`${y}. ${dwarves[x]}`)
    y++;
    
  }
  return newArray.join(" ") + " "
}

function summonCaptainPlanet(planeteerCalls){
//   for(var x = 0; x<planeteerCalls.length; x++){
//     planeteerCalls[x].toUpperCase() + "!"
//   }
//   return planeteerCalls
// }

var newArray = []
planeteerCalls.forEach(function(value){
  var shift = value.split("").shift()
  newArray.push(shift.toUpperCase() + value.slice(1) + "!")
})
return newArray
}



function longPlaneteerCalls(words) {
 for(var x = 0; x<words.length; x++){
   var split = words[x].split("")
   if (split.length > 4){
      return true
     }
   }
   return false
 }


function findTheCheese (foods) {
var cheeses = ["cheddar", "gouda","camembert"]
// for(var x = 0; x<foods.length; x++){
//   for(var i = 0; i < cheeses.length; i++){
//       if (cheeses[i] === foods[x]){
//         x+=foods.length
//       return foods[x];
//       }
//     }
//   }
  // return "no cheese!"
  for(var i = 0; i < foods.length; i++){
    for(var x = 0; x< cheeses.length; x++){
      if (foods[i] === cheeses[x]){
        i+=foods.length
        return cheeses[x]
      }
    }
  }
return "no cheese!";
}