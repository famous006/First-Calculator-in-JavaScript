function multiply() {
    const first = firstNumber.value
    const second = secondNumber.value
    const product = first * second
    console.log(product);
    solution.innerHTML = product
}

function subtract() {
    const first = firstNumber.value
    const second = secondNumber.value
    const subtract = first - second
    console.log(subtract);
    solution.innerHTML = subtract
}

function divide() {
    const first = firstNumber.value
    const second = secondNumber.value
    const divide = first / second
    console.log(divide);
    solution.innerHTML = divide
}

function add() {
    let first = Number(firstNumber.value)
    let second = Number(secondNumber.value)
    let add = first + second
    console.log(add);
    solution.innerHTML = add
}
