function url(str){
    for(var i = 0; i < str.length; i++) {
        str = str.replace(" ", "%20");
       }
    return str;
}
function change(str){
    var consonants = "bcdfghjklmnpqrstvwxyz";
    for(var i = 0; i < str.length; i++)
    if (str[i] !== " " && str[i] !== "a" && str[i] !== "e" 
    && str[i] !== "i" && str[i] !== "o" && str[i] !== "u"){
        str = str.replace(consonants[i], consonants[i+1]);
    }
    return str
}