//creating a function
function url(str){
    //for loop to replace " " with "%20"
    for(var i = 0; i < str.length; i++) {
        str = str.replace(" ", "%20");
       }
    return str;
}
