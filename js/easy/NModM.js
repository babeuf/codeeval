//Sample code to read in test cases:
var fs  = require("fs");
var digits = new Array() ; 


fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    line = line.trim() ; 
    
    if (line != "") {
       
        var all = line.split(",") ; 
        var n = all[0] ; var m = all[1] ; 
       if ( m!= 0 )  console.log( n - parseInt(n/m) * m ) ;
        
    }
});