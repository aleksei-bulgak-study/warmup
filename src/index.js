module.exports = function warmup(temperature) {
  if(temperature != null && Number.isInteger(temperature)){
    return temperature * 9/5 + 32
  }
  return temperature
};
