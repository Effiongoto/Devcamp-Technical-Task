//creating a function
function isPrime(n) {
    //for loop to test for prime numbers
    for (var i = 2; i < n; i++) { // i will always be less than the parameter so the condition below 
        //will never allow parameter to be divisible by itself ex. (11 % 11 = 0) which would return true
      if(n % i === 0) return false; // when parameter is divisible by i, it's not a prime number so 
      //it will return false
    }
    return n > 1; // otherwise it's a prime number so return true (it also must be greater than 1, reason for the n > 1 instead of true)
  }
//uses function from task_2
function primeNumbers(numbers) {
    // Declaring variable
      var prime = [];
      // for loop to check if number is prime or not
      for (var i = 0; i < numbers.length; i++) {
      if(isPrime(numbers[i]) === true){
        //prime numbers are added to the prime array
        prime.push(numbers[i]);
      }
    }
    // returns an array of prime numbers
    return prime;
}