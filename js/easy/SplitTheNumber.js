
var fs  = require("fs");
var lett = ["a","b","c","d","e","f","g","h","i","j"] ; 

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    
    line = line.trim() ; 
    if (line != "") {
        
       var all = line.split(" ") ; 
        var pat = all[1] ; 
       var add = pat.indexOf("+") != -1 ; 
        var splitPos = pat.indexOf(add ? "+" : "-") ; 
        
        var left = Number(all[0].substr(0,splitPos)) ; 
        var right = Number(all[0].substr(splitPos)) ; 
        
        console.log( add ? left + right : left - right ) ;
        
}
});
