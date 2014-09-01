
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    
    line = line.trim() ; 
    if (line != "") {
     
        var l = line.length ; 
        
        for ( var i = 0 ; i < l ; ++i )
        {
            var c = line.charAt(i) ; 
            if ( line.indexOf(c) == line.lastIndexOf(c)) 
            {
                console.log(c) ; 
                break  ; 
            }
        }
     
    }
});
