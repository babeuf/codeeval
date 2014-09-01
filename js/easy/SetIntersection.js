var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        
        var lines = line.trim().split(";") ; 
        var v1 = lines[0].split(",") ; 
        var v2 = lines[1].split(",") ; 
        
        var common = new Array() ; 
        
       if ( v1.length < v2.length ) 
       {
           var tmp = v1 ; 
           v1 = v2 ; 
           v2 = tmp ; 
       }
        
        var l = v1.length ; 
        
        for ( var i = 0 ; i < l ; ++i )
        {
            var v = v1[i] ; 
            if ( v2.indexOf(v) != -1 && common.indexOf(v) == -1 ) common.push( v ) ;  
        }
        
        if ( common.length == 0 ) console.log("") ; 
        
        else
        {
            common.sort(function(a, b){return a-b}) ; 
        
        console.log(common.join(",")) ; 
        }
        
      
    }
});