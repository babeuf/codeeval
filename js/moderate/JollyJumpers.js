var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    
    line = line.trim() ; 
    if (line != "") {
     
       var a = line.split(" ") ; 
        var l = a.shift() ; 
        
        if ( l == 0 )
        {
            console.log("Not jolly") ; 
        }
        else if ( l == 1 ) 
        {
            console.log("Jolly") ; 
        }
        else
        {
            //var a=  new Array(l-1) ; 
            
            var up ;
           
            for ( var i = 1 ; i < l ; ++i )
            {
                var d = Math.abs(a[i-1] - a[i]) ;
               console.log(d) ; 
                if ( d != i && d != l-i ) break ; 
                
                if ( i == 1 ) up = d == 1 ;                 
                else if ( up && d != i || !up && d != l - i ) break ; 
               
                
            }
            
            
          //console.log(line);
           console.log( i == l ? "Jolly" : "Not jolly") ; 
            
            
            
        }
       
        
        
       
     
    }
});
