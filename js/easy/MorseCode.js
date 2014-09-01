
var fs  = require("fs");
var dico= new Array() ; 

dico[".-"] = "A" ;
dico["-..."] = "B";
dico["-.-."] = "C";
dico["-.."] = "D";
dico["."] = "E";
dico["..-."] = "F";
dico["--."] = "G";
dico["...."] = "H";
dico[".."] = "I";
dico[".---"] = "J";
dico["-.-"] = "K";
dico[".-.."] = "L";
dico["--"] = "M";
dico["-."] = "N";
dico["---"] = "O";
dico[".--."] = "P";
dico["--.-"] = "Q";
dico[".-."] = "R";
dico["..."] = "S";
dico["-"] = "T";
dico["..-"] = "U";
dico["...-"] = "V";
dico[".--"] = "W";
dico["-..-"] = "X";
dico["-.--"] = "Y";
dico["--.."] = "Z";
dico["-----"] = "0";
dico[".----"] = "1";
dico["..---"] = "2";
dico["...--"] = "3";
dico["....-"] = "4";
dico["....."] = "5";
dico["-...."] = "6";
dico["--..."] = "7";
dico["---.."] = "8";
dico["----."] = "9";


fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    
    line = line.trim() ; 
    if (line != "") {
        
    var all = line.split(" "); 
     var out = "" ; 
        
        var l = all.length; 
        
        for ( var i = 0 ; i < l ; ++i )
        {
            
            out += dico[all[i]] ? dico[all[i]] : " " ; 
            
        }
                        console.log(out) ; 
        
}
});
