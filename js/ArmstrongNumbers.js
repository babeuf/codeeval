//https://www.codeeval.com/open_challenges/82/
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    
    line = line.trim() ; 
    if (line != "") {
       
        var power = line.length ; 
        var all = line.split("") ; 
        
        var sum = 0 ; 
        
        for ( var i = 0 ; i < power ; ++i )
        {
            sum += Math.pow(all[i],power) ; 
        }
        
        console.log( sum == line ? "True" : "False" ) ; 
        
        
    }
});