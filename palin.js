var palin = "1323221" //Change

function palin_check(palin){

  //For length of 1
  if (palin.length == 1) {
    return "YES"
  }

  //For length of even
  if (palin.length%2 == 0) {
    var length = Math.floor(palin.length/2) - 1
    var lengthtwo = Math.floor(palin.length/2) 
    for ( var i = 0; i < palin.length ; i++){
      console.log(palin[length - i])
      console.log(palin[lengthtwo + i])
      if (palin[length - i] != palin[lengthtwo + i]) {
        return "NO"
      }
    }
    return "YES"
  }
  else { //For length of odd 
    var length = Math.floor(palin.length/2) 
    for ( var i = 0; i < palin.length ; i++){
      if (palin[length - i] != palin[length + i]) {
        return "NO"
      }
    }
    return "YES"
  }

}

console.log(palin_check(palin))
