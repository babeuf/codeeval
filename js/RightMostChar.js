
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        
        line = line.trim() ; 
        var tmp = line.split(",") ; 
        
        var sent=  tmp[0] ;
        var c = tmp[1] ; 
        
        var letters = sent.split("").reverse().join("") ; 
        var index = letters.indexOf(c) ; 
        
        if ( index != -1 )
        {
            console.log(letters.length-1 - index) ;        
        }
        else console.log("-1") ;
        
        
        
    }
});
