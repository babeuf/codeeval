var fs  = require("fs");

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
      
    line = line.trim().toLowerCase() ; 
       
    var alphabet= [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0] ;
    
    
    var l = line.length ; 
    var i ; 
    
    for ( i = 0 ; i < l ; ++i )
    {
        var c = line.charCodeAt(i)  ; 
       if ( c >= 97 && c <= 122 ) 
       {
           alphabet[ c - 97 ] = 1 ; 
       }
    
        
    }
    
    var out = "" ; 
    
    for ( i = 0 ; i < 26 ; ++i )
    {
        if( alphabet[i] == 0 ) out += String.fromCharCode(i+97) ; 
        
    }
    
 
    console.log(out == "" ? "NULL" : out) ; 
    
    

});



