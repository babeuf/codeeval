var fs  = require("fs");var sortFunc = function(a,b) {return a-b } ; 

 

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    
    line = line.trim() ; 
    if (line != "") {
        
        var all = line.split(",") ; 
        var step = Number(all[1]) -1;
        var l = Number(all[0]) ; 
        
        var crowd = [] ; 
        var i ; 
        
        for ( i = 0 ; i < l ;++i ) crowd.push(i);
        
        var last = 0 ;
        var out = "" ; 
        var cl = crowd.length ; 
        
        while ( cl > 0 )
        {
            last = (last + step) ;     
            if ( last > cl-1 ) last -= cl ; 
            out += crowd.splice(last,1) + " " ; 
            cl = crowd.length ; 
            
        }
        
        console.log(out.trimRight()) ; 
    }
});