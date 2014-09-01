var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    
    line = line.trim() ; 
    if (line != "") {
     
       var all = line.split(",") ; 
        
        var l = all.length ; 
        var best = -99999999999999999999999999999999999999999999999999999999 ; 
        
        for ( var i = 0 ; i < l ; ++i )
        {
            var sum = Number(all[i].trim()) ; 
            
            if ( sum > best ) 
            {
               
                best = sum ; 
            }
            for ( var j = i+1 ; j < l ; ++j )
            {
                
                sum += Number(all[j].trim()) ;                
                if ( sum > best ) best = sum ; 
            }
            
            
            
        }
      
        console.log(best) ;
        
        
       
     
    }
});
