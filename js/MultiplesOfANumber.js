var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        
       var all = line.split(",") ; 
        var x = all[0] ;
        var n = all[1] ; 
        
        var i = 2 ; 
        var o = -1 ;
        while ( o < x )
        {
            o = n * i ; 
            i++ ;
        }
        console.log(o) ; 
      
    }
});