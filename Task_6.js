//creating a function
function sum(arr, target){
    // declaring variable that will store the final array
    var result = [];
    // looping through the array of numbers to find 3 numbers that add up to the targer
    for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {     for (var k = j +1; k < arr.length; k++) {
    if (arr[i] + arr[j] + arr[k] === target) {
    // pushing the numbers into the result array
    result.push(arr[i]);
    result.push(arr[j]);
    result.push(arr[k]);
    return result;
    } else {
        // if numbers cannot be found, -1 is returned instead
        return -1;
    }
    }
    }
    }
    
    }
  