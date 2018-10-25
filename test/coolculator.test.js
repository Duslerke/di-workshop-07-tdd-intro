var chai = require('chai')
var expect = chai.expect

var Coolculator = require('../lib/coolculator')

describe('Coolculator', function() {
  mm = new Coolculator()

  it('should add', function() {
    result = mm.add(2,3,7,8,9,4,3,1,3,4)
    expect(result).to.equal(44)
  })

  it('should divide', function() {
    result = mm.divide(3,2)
    expect(result).to.equal(1.5)
  })

  // Uncomment this 👇
  it('should multiply', function() {
    result = mm.multiply(2, 3)
    expect(result).to.equal(6)
  })

  // Uncomment this 👇
  it('should subtract', function() {
    result = mm.subtract(3, 2)
    expect(result).to.equal(1)
  })

  it('should highest', function() {
    result = mm.highest(2,2)
    expect(result).to.equal('numbers are equal!')
  })

  it('should lowest', function() {
    result = mm.lowest(2,1)
    expect(result).to.equal(1)
  })

  // it('should double', function() {
  //   result = mm.double(3)
  //   expect(result).to.equal(6)
  // })

  // it('should square', function() {
  //   result = mm.square(3)
  //   expect(result).to.equal(9)
  // })

  // it('should power', function() {
  //   result = mm.power(2,4)
  //   expect(result).to.equal(16)
  // })

  // it('should negative', function() {
  //   result = mm.negative(-7)
  //   expect(result).to.equal(true)
  // })

  // it('should positive', function() {
  //   result = mm.positive(-1)
  //   expect(result).to.equal(false)
  // })

  // it('should cool', function() {
  //   result = mm.cool(88)
  //   expect(result).to.equal(true)
  // })

  // it('should add array', function() {
  //   result = mm.addArary([7,3,5,5])
  //   expect(result).to.equal(20)
  // })

  // it('should multiply array', function() {
  //   result = mm.multArray([5,4,3,2,1]])
  //   expect(result).to.equal(120)
  // })

  // it('should average', function() {
  //   result = mm.average([1,2,3,4,5,6,7,8,9]])
  //   expect(result).to.equal(5)
  // })

  // it('should factorial', function() {
  //   result = mm.factorial(6)
  //   expect(result).to.equal(720)
  // })

  it('should random', function() { //well it didn't ask, whether the numbers are equally random, so..
    var testnumber = 10;
    var numbChecks = 5000;
    var counter = 1;
    var works = true;

    var lastArray = [];
    
    if (works) { // I checked whether the numbers are random enough
      for (let i=0; i<numbChecks; i++){
        var tempArray = []
        for (let i=0; i<250 ; i++){ //200 conseq numbers 
          stuff=mm.random(testnumber)
          if(0 > stuff && stuff > testnumber){
            result = 'numbers outside the specified range'
            works = false;
            break;
          }
          tempArray.push(stuff)
        }
        if (i>0) {
          if (('c'+tempArray) != ('c'+lastArray) ) {
            counter++
          }
        }
        lastArray = tempArray
      }
      result = counter
    }

    expect(result).to.equal(numbChecks)
  })
})
