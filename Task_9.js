//creating a function
function isPalindrome(string) {
    // conditional statement to check if string is a palindrome
    // if string is equal to it's, then it is a palindrome  
    if(string == string.split("").reverse().join("")){
        return "Yes";
    } else{
        return "No";
    }
}

