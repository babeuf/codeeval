
var fs  = require("fs");


fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    
    line = line.trim() ; 
    if (line != "") {
        
    var units = line.substr(line.length-1,1) ; 
        var dec = line.length > 1 ? line.substr(line.length-2,1) : 0 ; 
         var cent = line.length > 2 ? line.substr(line.length-3,1) : 0 ; 
        var mil = line.length > 3 ? line.substr(0,line.length-3) : 0; 
        
        var out = "" ; 
        
        var i = 0; 
        
        for ( i = 0 ; i < mil ; ++i ) out += "M" ;
        
         if ( cent == 1 ) out += "C"; 
         else if ( cent == 2 ) out += "CC"; 
         else if ( cent == 3 ) out += "CCC"; 
         else if ( cent == 4 ) out += "CD"; 
         else if ( cent == 5 ) out += "D"; 
        else if ( cent == 6 ) out += "DC"; 
         else if ( cent == 7 ) out += "DCC"; 
         else if ( cent == 8 ) out += "DCCC"; 
         else if ( cent == 9 ) out += "CM"; 
        
        
        if ( dec == 1 ) out += "X"; 
         else if ( dec == 2 ) out += "XX"; 
         else if ( dec == 3 ) out += "XXX"; 
         else if ( dec == 4 ) out += "XL"; 
         else if ( dec == 5 ) out += "L"; 
         else if ( dec == 6 ) out += "LX"; 
         else if ( dec == 7 ) out += "LXX"; 
         else if ( dec == 8 ) out += "LXXX"; 
         else if ( dec == 9 ) out += "XC"; 
        
         if ( units == 1 ) out += "I"; 
         else if ( units == 2 ) out += "II"; 
         else if ( units == 3 ) out += "III"; 
         else if ( units == 4 ) out += "IV"; 
         else if ( units == 5 ) out += "V"; 
         else if ( units == 6 ) out += "VI"; 
         else if ( units == 7 ) out += "VII"; 
         else if ( units == 8 ) out += "VIII"; 
         else if ( units == 9 ) out += "IX"; 
        
        
    console.log(out) ;
}
});
