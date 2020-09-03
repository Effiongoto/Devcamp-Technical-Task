//creating a function
function sum(numbers) { 
    // Declaring variables
    var even = 0; 
    var odd = 0; 
    // for loop to check if number is odd or even
    // odd number added to odd variable and even numbers to even variable
    for (let i = 0; i < numbers.length; i++){ 
        if(numbers[i] % 2 == 0){
            even += numbers[i];
        } else {
            odd += numbers[i];
        }
    }
    //to return an array with first index sum of even numbers and second index sum of odd numbers
    return [even, odd];
  };
