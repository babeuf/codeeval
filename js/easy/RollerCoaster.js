
var fs  = require("fs");

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    
    line = line.trim() ; 
    if (line != "") {
        
    var l = line.length ; 
        var out = "" ; 
        var toUp = true ; 
        
        for ( var i=  0 ; i < l ; ++i )
        {
            var c = line.charAt(i) ; 
            if ( c.toLowerCase() != c.toUpperCase() )
            {
               c = toUp ? c.toUpperCase() : c.toLowerCase();  
                toUp = !toUp ; 
            }           
            
             out += c ; 
            
        }
        
        console.log(out) ; 
        
        
}
});

