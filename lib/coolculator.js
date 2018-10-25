class Coolculator {

  add(...numbs) {
    var sum = 0;
    for (var i = 0; i < numbs.length; ++i){
      sum += numbs[i];
    }

    return sum;
  }
  multiply(a,b){
    return a*b;
  }

  divide(a, b){
    return a/b;
  }

  subtract(a,b){
    return a-b;
  }

  highest(a,b){
    if (a>b) {
      return a
    } else if (a<b) {
      return b
    } else {
      return 'numbers are equal!'
    }
  }

  lowest(a,b){ // lowest xD
    if (a<b) {
      return a
    } else if (a>b) {
      return b
    } else {
      return 'numbers are equal!'
    }
  }

  double(a) {
    return 2*a
  }

  random(a) {
    // var rund = Math.random()
    // if (rund <= 0.99){
    //   return 2
    // }
    // else {
    //   return 3
    // }
    return Math.floor(Math.random() * (a+1));
  }


}

module.exports = Coolculator
