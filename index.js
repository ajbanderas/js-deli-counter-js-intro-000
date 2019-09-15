function takeANumber(place, name){
  var welcomeMessage = [];
  for(var i = 0; i < place.length - 1; i++){
    welcomeMessage.push(`Welcome, ${name[i]}. You are number ${place[i]} in line.`);
    return welcomeMessage[i];
  }
}