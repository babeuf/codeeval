//Sample code to read in test cases:
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
       
        var all = line.split(",") ; 
        var n = all[0] ;
        var p1 = all[1] ; 
        var p2 = all[2] ; 
        
        var bin = parseInt(n,10).toString(2) ; 
        
        
        
        console.log( bin.charAt(bin.length - p1) == bin.charAt(bin.length - p2) ? "true" : "false") ;
        
    }
});