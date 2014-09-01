//https://www.codeeval.com/open_challenges/1/
//1 2 F 4 B F 7 8 F B
//1 F 3 F 5 F B F 9 F 11 F 13 FB 15


var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        
        
        var all = line.split(" ") ; 
        var f = all[0] ; 
        var b = all[1] ; 
        var cnt = all[2] ; 
        var i ; 
        var out = "";  
        
        for ( i = 1 ; i <= cnt ; ++i ) 
        {
            var found = false ; 
            if ( Math.floor(i/f) == (i/f)) 
            {
                found = true ; 
                out += "F" ; 
            }
            if ( Math.floor(i/b) == (i/b))
            {
                found = true ;
                out += "B" ; 
            }
            
            if ( found != true ) out += i ; 
            out += " " ; 
        }
        
        
        console.log(out ) ; 
       
    }
});