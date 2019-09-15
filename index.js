function takeANumber(current, next){
  current.push(next);
  var num = current.length;
  return `Welcome, ${next}. You are number ${num} in line.`;
}