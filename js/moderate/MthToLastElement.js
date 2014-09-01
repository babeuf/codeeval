
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    
    line = line.trim() ; 
    if (line != "") {
        
      var all = line.split(" ") ; 
  
        
        
        var mth = Number(all.pop()) ; 
        
         var l =all.length ; 
        
       if ( l - mth >= 0 ) console.log(all[l-mth]) ; 
    }
});
