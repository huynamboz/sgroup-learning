function isIncreaseChainNumber(number) {
    const numberString = number.toString()
    const numberArray = numberString.split('')
    let result = false
    for (let i = 0; i < numberArray.length - 1; i++) {
        if (numberArray[i] < numberArray[i + 1] && numberArray[i+1] < numberArray[i+2]) {
        result = true
        break
        }
    }
    return result
}

const number1 = 123456789n
const number2 = 123432112321n
const number3 = 988811111n

console.log(isIncreaseChainNumber(number1))  // true
console.log(isIncreaseChainNumber(number2)) // true
console.log(isIncreaseChainNumber(number3)) // false