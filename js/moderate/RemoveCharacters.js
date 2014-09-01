
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    
    line = line.trim() ; 
    if (line != "") {
     
        var all = line.split(", ");
        
        var w =     all[0] ; 
        
        var lett= all[1].split("") ; 
        
        var l = lett.length ; 
        while ( l--  ) 
        {
            w = w.split(lett[l]).join("") ; 
        }
        
        console.log(w) ; 
     
    }
});
