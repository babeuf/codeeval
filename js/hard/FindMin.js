var fs  = require("fs");
 var min ;     
var known ; var all; 
var n,k,a,b,c,r , i ;

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    
    line = line.trim() ; 
    if (line != "") {
     
      
       var all = line.split(",") ; 
        var i ; 
        
       n = Number(all[0]);  
       k = Number(all[1]);  
       a = Number(all[2]);  
       b = Number(all[3]);  
       c = Number(all[4]);  
       r = Number(all[5]);  
        
        known = [] ; 
        known[0] = a ; 
        
        for ( i = 1 ; i < k ; ++i )
        {
            known[i] = ( b * Number(known[i -1]) + c ) % r ;
        }
        
    
        
        for ( i = k ; i < n ; ++i )
        {
            min = -1 ;
            
            while (min < 0 || known.indexOf(min) != -1)
            {
                min++ ;
            
            }
            
           known.push(min) ;
           known.shift() ; 
           
        }
        
        console.log(min) ;
     
    }
});
