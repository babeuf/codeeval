
var fs  = require("fs");


fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    
    line = line.trim() ; 
    if (line != "") {
        
   var pattern = "" ; 
        var l = line.length;  
        
        for ( var i = 0 ; i < l ; ++i )
        {
            pattern += line.charAt(i) ; 
            if ( line.split(pattern).join("") == "" ) break ; 
          
            
        }
        
    console.log(pattern.length) ; 
}
});
