//Sample code to read in test cases:
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    
   line = line.trim() ; 
    
    
    if (line != "") {
       
    var hapSec  = new Array() ; 
    var last = line ; 
        
    while ( last != 1 && hapSec.indexOf(last) == -1 )
    {
        hapSec.push(last) ;   
        var ls = last.toString() ;        
        var digits = ls.split("") ; 
        var dl = ls.length ; 
        last = 0 ; 
        for ( var i = 0 ; i < dl ; ++i )
        {
            last +=  digits[i] * digits[i] ; 
        }
     
    }
   
   console.log(last == 1 ? 1 : 0) ; 
   
        
    }
});