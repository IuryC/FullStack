const vetor = [1, 2, 3]

vetor.forEach((item, index) => console.log("Array: " + item + "\nIndex: " + index))

function mathOperator(num1, num2, op) {
    return op(num1, num2)
  }
  console.log(mathOperator(1, 2, (num1, num2) => num1 + num2))

  function operadorMult(num1, num2){
    return num1 * num2
  }
  console.log(mathOperator(5, 2, operadorMult))
