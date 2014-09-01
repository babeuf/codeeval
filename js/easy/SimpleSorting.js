
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    
    line = line.trim().toLowerCase() ; 
    if (line != "") {
        
      var nums = line.split(" ") ; 
      nums.sort( function(a,b) {return a-b ;}); 
        
        var output = "" ; 
        var nl = nums.length ; 
        
        for ( var i = 0 ; i < nl ; ++i )
        {
            var n = nums[i] ; 
            if ( n.indexOf(".") == -1 ) n += "." ;
            
            var parts = n.split(".") ;             
            var dec = parts[1].substr(0,3) ;    
            while ( dec.length < 3 ) dec += "0" ; 
            output += parts[0] + "." + dec + " " ;
            
        }
        
      console.log(output.trimRight()) ; 
        
    }
});