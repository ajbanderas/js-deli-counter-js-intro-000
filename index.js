function takeANumber(current, next){
  var counter = current.length;
  for(var i = 0; i < next.length; i++){
    counter++;
    return `Welcome, ${next}. You are number ${counter} in line.`;
  }
}