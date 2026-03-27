function calculateTax(amount) {
    let taxrate=0.1
    return amount*taxrate
}

console. log(calculateTax(500)) 


function convertToUpperCase(text) {
    return text.toUpperCase()
}

console. log(convertToUpperCase("today")) 


function findMaximum(num1,num2) {
    if (num1 > num2) return num1
     else return num2  
    }
console. log(findMaximum(25,25)) 


function isPalindrome(word) {
   let backwardAndForward=word.split("").reverse().join("")

    if (word === backwardAndForward)
        return true
    else return false
}

console .log(isPalindrome ("mark")) 


function calculateDiscountedPrice(originalPrice ,discountPercentage) {
    originalPrice=100
    discountPercentage=0.20
    
   return discountPercentage*originalPrice 
}
console .log(calculateDiscountedPrice())





// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };