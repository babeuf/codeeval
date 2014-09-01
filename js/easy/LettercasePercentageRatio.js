
var fs  = require("fs");

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    
    line = line.trim() ; 
    if (line != "") {
        
      var up = 0 ; 
        var low = 0;
        var cnt = 0; 
        
        var l = line.length ; 
        
        for ( var i = 0 ; i < l ; ++i )
        {
            var c = line.charAt(i) ; 
            
            if ( c == c.toUpperCase()) up++ ;
            else low ++ ; 
            
            cnt ++;  
        }
        
        var rl = String(Math.round( (low * 100 / cnt) * 100 ) / 100) ; 
        var ru = String(Math.round( (up * 100 / cnt ) * 100 ) / 100); 
        
        if ( rl.indexOf(".") == -1 ) rl = rl + ".00" ;
        else  if ( rl.indexOf(".") != rl.length -3 ) rl += "0" ; 
        
        if ( ru.indexOf(".") == -1 ) ru = ru + ".00" ;
        else  if ( ru.indexOf(".") != ru.length -3 ) ru += "0" ; 
        
        
        console.log("lowercase: "+ rl+" uppercase: "+ru) ; 
       
        
}
});