# Python function to check the strength of a password
def passwordValidation(input_string):   
    # declaring variables 
    n = len(input_string) 
    hasString = False
    hasDigit = False
    specialChar = False
    normalChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890 "

    # validation code  
    for i in range(n): 
        if input_string[i] in normalChars: 
            hasString = True
        if input_string[i].isdigit(): 
            hasDigit = True
        if input_string[i] not in normalChars: 
            specialChar = True

    
    # strings only
    if (hasString):
        score = 0
    # numbers only
    elif (hasDigit):
        score = 1
    # strings and numbers
    elif (hasString and hasDigit):
        score = 2
    # strings, numbers and special characters
    elif (hasString and hasDigit and specialChar):
        score = 3
   
    return score
