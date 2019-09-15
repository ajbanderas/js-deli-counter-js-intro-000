function takeANumber(current, next){
  current.push(next);
  var num = current.length;
  return `Welcome, ${next}. You are number ${num} in line.`;
}

function nowServing(line){
  if(line.length === 0){
    return "There is nobody waiting to be served!"
  } else{
    var serving = ``
  }
}