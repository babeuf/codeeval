
var fs  = require("fs");
var lett = ["a","b","c","d","e","f","g","h","i","j"] ; 

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    
    line = line.trim() ; 
    if (line != "") {
        
        var l = line.length;  
        
        var out = "" ;
        
        for ( var i = 0 ; i < l ; ++i )
        {
            var c = line.charAt(i) ; 
           if ( Number(c) >= 0 ) 
            {
                out += c + "" ; 
               
            }
            else 
            {
                var ind = lett.indexOf(c) ; 
                if ( ind != -1 ) out += ind ;
            }
        }
        if ( out == "" ) out = "NONE" ; 
        console.log(out) ;
   
        
}
});
