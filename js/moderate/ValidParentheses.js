var fs  = require("fs");

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
      
    line = line.trim().toLowerCase() ; 
       
    if (line != "") {
         
       var stack = new Array() ; 
        
        var l  = line.length ;
        var valid = true;  
        
        for ( var i  = 0 ; i < l ; ++i )
        {
            var c= line.charAt(i) ;
            
            if ( c == "(" || c == "[" || c == "{" ) stack.push(c) ; 
            else
            {
                if ( stack.length == 0 ) 
                {
                    valid = false ; break ; 
                }
                
                var sp = stack.pop(); 
                
                if ( c== ")" && sp != "(" || c== "}" && sp != "{" || c== "]" && sp != "[" ) 
                {
                    valid = false ; break ; 
                }
            }
            
        }
        
        if ( stack.length > 0 ) valid = false ; 
        
        
        console.log(valid ? "True" : "False" ) ; 
       
     
    }
    
    
});