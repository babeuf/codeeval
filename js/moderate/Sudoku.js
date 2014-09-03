var fs  = require("fs");var sortFunc = function(a,b) {return a-b } ; 

 

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    
    line = line.trim() ; 
    if (line != "") {
        
        var all = line.split(";") ;
        var grid = all[1].split(",") ; 
        var dim = Number(all[0]) ; 
        
        
      
    }
});