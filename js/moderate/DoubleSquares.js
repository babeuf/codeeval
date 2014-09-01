var fs  = require("fs");
 var first= true ; 

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    
    if ( !first) 
    { 
    line = line.trim() ; 
    
    
   
    if (line != "") 
    {
             
        var l = Number(line) ; 

        var half = Math.sqrt( l / 2 ) ; 
        var total = 0 ; 
        
        for (var i = 0; i <= half; i++) 
        {            
            var j = Math.sqrt( l - i*i);
            if (j == Math.floor(j))  total++ ;  
           
        }
        
        console.log(total); 
    }
       
     
    }
    else first =false ;
});
