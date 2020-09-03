function fibonacciGenerator (n) {
    var output = [0,1];
    
    while(output.length < n) {
      var firstNumber = output[output.length-2];
      var secondNumber = output[output.length-1];
      output.push(firstNumber + secondNumber);
    }

    return output.slice(0,n); // Just in case n is less than 2
}

fibonacciGenerator(7);