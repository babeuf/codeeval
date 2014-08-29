var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    
    line = line.trim() ; 
    if (line != "") {
        
     var output = "" ; 
        
        var l = line.length; 
        
        for ( var i = 0 ; i < l ; ++i ) 
        {
            var c = line.charAt(i) ; 
            
            if ( c == c.toLowerCase() ) output += c.toUpperCase() ; 
            else output += c.toLowerCase() ; 
            
            
        }
        
        console.log(output) ; 
           
      
        
    }
});