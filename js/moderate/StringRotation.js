var fs  = require("fs");var sortFunc = function(a,b) {return a-b } ; 

 

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    
    line = line.trim() ; 
    if (line != "") {
        
        var all = line.split(",") ;
        var origin = all[0].split("") ; 
        var test = all[1] ; 
        var l = test.length ; 
        var ok = false ;  
        
        if ( l != origin.length ) ok = false;  
        else            
        {
             for ( var i =0 ; i < l ; ++i )
             {
                 origin.push( origin.shift() )
                 if ( origin.join("") == test )
                 {
                     ok = true ; 
                     break ; 
                 }
             }
            
            
        }
        
            console.log(ok ? "True" : "False" ) ;     
       
        
      
    }
});