var fs  = require("fs");

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
      
    line = line.trim().toLowerCase() ; 
       
    if (line != "") {
         
        var list = new Array() ; 
        var out = "" ; 
        
        for ( var i = 0 ; i < line ; ++i )
        {
            var cur = list[i] = new Array() ;       
            var prev = i > 0 ? list[i-1] : null ; 
            
            for ( var j = 0 ; j <= i ; ++j )
            {
               if ( !prev) cur[j] = 1 ; 
                else
                {
                    var p = j > 0 ? prev[j-1] : 0  ;
                    var n = j < i ? prev[j] : 0 ;
                    cur[j] = Number(p) + Number(n) ; 
                }
                
               
                
                
                
            }
            
            out += cur.join(" ") + " "
            
        }
        
        
        
        
        console.log(out.trimRight()) ; 
       
     
    }
    
    
});
    