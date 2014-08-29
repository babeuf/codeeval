//Sample code to read in test cases:
var fs  = require("fs");
var digits = new Array() ; 


fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    line = line.trim() ; 
    
    if (line != "") {
        
        digits[0] = 0 ;
        digits[1] = 0 ;
        digits[2] = 0 ;
        digits[3] = 0 ;
        digits[4] = 0 ;
        digits[5] = 0 ;
        digits[6] = 0 ;
        digits[7] = 0 ;
        digits[8] = 0 ;
        digits[9] = 0 ;
        
        var all = line.split("") ; 
        var l  = all.length ; 
        
        for ( var i = 0 ; i < l ; ++i )
        {
            var d = all[i] ; 
            digits[d]++ ; 
        }
        
        var ok = true ; 
       
        for ( var i = 0 ; i < l ; ++i )
        {
            //console.log(all[i] + "/" + digits[i] ) ; 
            if ( all[i] != digits[i] ) ok = false ; 
        }
        
        //console.log("********") ; 
        //console.log( line ) ;
        //console.log(digits) ; 
        console.log( ok ? 1 : 0 ) ;
        
    }
});