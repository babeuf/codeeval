var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    
    line = line.trim() ; 
    if (line != "") {
        
     var all = line.split("|") ; 
    var key = all[0].trim(); 
    var seq = all[1].trim().split(" ") ; 
        
        var sl = seq.length; 
        var out = "" ; 
        
        for ( var i = 0 ; i < sl ; ++i )
        {
           out += key.charAt(Number(seq[i])-1) ; 
            
            
        }
        
        
           
        console.log(out) ; 
        
    }
});