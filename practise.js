function song(x) {
  if (x%2===0) {
    return "Its and Even Number!"
  } else {
    return "Its an Odd Number"
  }
}

function factorial(y) {
  var result = 1;
  if (y === 0) {
    return 1;
  }
    for (var i = 1; i <= y; i++) {
    result = result * i; // result *= i;
    }
    return result;
  }
}
//
// var firstnumber = document.getElementById("num1").value;
// return "A for Apple.B for Ball.C for Cat.";
