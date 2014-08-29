var fib = new Array() ; 
fib[0] = 0 ;
fib[1] = 1 ; 


var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    
    line = line.trim() ; 
    
    if (line != "") {
            
           if ( fib[line] )  console.log( fib[line] ) ; 
           else
           {
               var f = 0 ;
                for ( var i = 1 ; i <= line ; ++i )
                {           
                        if ( fib[i] ) f = fib[i] ; 
                        else 
                        {
                            var f = fib[i-2] + fib[i-1] ; 
                            fib[i] = f ;                    
                        }              
                }
               
                console.log(f) ; 
           }        
        
    }
});