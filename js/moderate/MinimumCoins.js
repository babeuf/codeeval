var fs  = require("fs");var sortFunc = function(a,b) {return a-b } ; 

 

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    
    line = line.trim() ; 
    if (line != "") {
        
       var d5,d3,d1 ;         
        d5 = Math.floor(line / 5) ;
        d3 = Math.floor( (line - d5 * 5) / 3) ;
        d1 = line - d5 * 5 - d3 * 3 ; 
        console.log(d5 + d3 + d1) ; 
    }
});