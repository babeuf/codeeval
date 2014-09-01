 var o = 0 ;

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        
       
        o += Number(line) ; 
        
         
      
    }
});

console.log(o) ; 