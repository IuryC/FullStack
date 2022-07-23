const vetor = [1, 2, 3]

vetor.forEach((item, index) => console.log(item, index))

function mathOrder(num1, num2, op) {
    return op(num1, num2)
  }
  
  console.log(mathOperator(1, 2, (num1, num2) => num1 + num2))