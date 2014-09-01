var fs  = require("fs");

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    
    line = line.trim() ; 
    if (line != "") {
        
       var all = line.split(",") ; 
       var l = all.length ; 
       var out = new Array() ; 
        
        for(  var i = 0 ; i < l ; ++i ) 
        {
            var d = all[i] ; 
            if ( out.indexOf(d) == -1 )
            {
                out.push(d) ; 
            }
            
        }
        out.sort(function(a, b){return a-b}) ; 
        
        console.log(out.join(",")) ; 
        
    }
});